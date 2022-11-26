<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import MagnetSection from 'src/components/MagnetSection.svelte';
  import type { QuadtreeLeaf } from 'd3';
  import { STACKS } from 'src/stacks';
  import { attr } from 'svelte/internal';
  let elmWidth: number = 0;
  let elmHeight: number = 0;
  function getRandomArbitrary([min, max]: [number, number]) {
    return Math.random() * (max - min) + min;
  }

  onMount(() => {
    let padding = 12; // padding between circles; also minimum radius
    let width = elmWidth;
    let height = elmHeight;
    const maxRadius = Math.min(elmHeight, elmWidth) / 7; // maximum radius of circle
    console.log(`maxRadius`, maxRadius);
    let candidatesPerCircle = 5; // initial number of candidates to consider per circle
    let circlesToAddPerFrame = 1; // initial number of circles to add per frame
    let circlesToAdd = 300; // remaining number of circles to add
    let newCircle = bestCircleGenerator(padding);

    const svg = d3
      .select('#tech-stack')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g');

    const middleX = elmWidth / 2;
    const middleY = elmHeight / 2;
    function appendCircle(
      circle: [number | undefined, number | undefined, number | undefined],
      src?: string
    ) {
      const x = circle[0];
      const y = circle[1];

      const radius = circle[2];
      if (!(x && y && radius) || radius < 0) return;

      const halfRadius = radius / 2;
      const svgGroup = svg
        .append('g')
        .attr('transform', `translate(${x - radius},${y - radius})`);

      const color = Math.random() > 0.5 ? 'primary' : 'secondary';

      const svgCircle = svgGroup
        .append('circle')
        .attr('cx', radius)
        .attr('cy', radius)
        .attr(
          'class',
          `${src ? `fill-${color}` : ``} ${
            Math.random() > 0.5 ? `stroke-${color}` : `stroke-${color}`
          }`
        )
        .style('stroke-width', 3)
        .style('stroke-opacity', src ? 1 : 0.4)
        .style(
          'fill-opacity',
          src
            ? 0.2
            : // (1 -
              //     Math.pow(
              //       Math.pow(x - middleX, 4) + Math.pow(y - middleY, 4),
              //       14
              //     ) /
              //       middleX) *
              //     2 -
              0.5
        );
      const CIRCLE_TRANS_DUR = 1500;
      svgCircle.transition().duration(CIRCLE_TRANS_DUR).attr('r', radius);
      const IMG_TRANS_DUR = 1000;

      if (src)
        svgGroup
          .append('image')
          .attr('x', halfRadius)
          .attr('y', halfRadius)
          .attr('width', radius)
          .attr('height', radius)
          .attr('href', src)
          .attr('opacity', 0)
          .transition()
          .duration(IMG_TRANS_DUR)
          .delay(CIRCLE_TRANS_DUR - 750)
          .attr('opacity', 1);
    }

    let lastTechIdx = 0;
    const techs = STACKS.flatMap(stack => stack.technologies);
    console.log(`techs`, techs.length);

    const timer = d3.interval(function () {
      console.log(`lastTechIdx`, lastTechIdx);
      console.log(`techs.length`, techs.length);
      if (lastTechIdx < techs.length) {
        const circle = newCircle(maxRadius, 50, {
          minX: (width * 1) / 6,
          maxX: (width * 5) / 6,
          minY: (height * 1) / 6,
          maxY: (height * 5) / 6,
        });
        console.log(`circle`, lastTechIdx, circle);
        if (circle && circle[0] && circle[1] && circle[2]) {
          appendCircle(circle, techs[lastTechIdx].imgSrc);
        }
        lastTechIdx++;
      } else {
        // for (let i = 0; i < circlesToAddPerFrame && --circlesToAdd >= 0; ++i) {
        //   const circle = newCircle(
        //     Math.random() > 0.5 ? maxRadius / 2 : maxRadius / 1.5,
        //     candidatesPerCircle
        //   );
        //   console.log(`circle`, circle);
        //   if (circle && circle[0] && circle[1] && circle[2]) {
        //     appendCircle(circle);
        //   }
        //   // As we add more circles, generate more candidates per circle.
        //   // Since this takes more effort, gradually reduce circles per frame.
        //   if (circlesToAdd < 100) {
        //     candidatesPerCircle *= 1.01;
        //     circlesToAddPerFrame *= 0.998;
        //   }
        // }
      }
      if (circlesToAdd === 0) timer.stop();

      return !circlesToAdd;
    }, 250);

    function bestCircleGenerator(padding: number) {
      const quadtree = d3.quadtree<[number, number, number]>().extent([
        [0, 0],
        [width, height],
      ]);

      return function (
        maxRadius: number,
        candidatesPerCircle: number,
        limits?: { minX: number; maxX: number; minY: number; maxY: number },
        targetMinDistance: number = Infinity
      ) {
        const searchRadius = maxRadius * 2;
        let bestX: number | undefined = undefined;
        let bestY: number | undefined = undefined;
        let bestDistance = 0;
        for (
          let i = 0;
          i < candidatesPerCircle || bestDistance < padding;
          ++i
        ) {
          const x = getRandomArbitrary(
            limits ? [limits.minX, limits.maxX] : [0, width]
          );
          const y = getRandomArbitrary(
            limits ? [limits.minY, limits.maxY] : [0, height]
          );
          const rx1 = x - searchRadius;
          const rx2 = x + searchRadius;
          const ry1 = y - searchRadius;
          const ry2 = y + searchRadius;
          let minDistance = maxRadius; // minimum distance for this candidate

          quadtree.visit(function (quad, x1, y1, x2, y2) {
            const p = (quad as QuadtreeLeaf<[number, number, number]>).data;

            if (p) {
              const dx = x - p[0];
              const dy = y - p[1];
              const d2 = dx * dx + dy * dy; // squared distance between random point and point
              const r2 = p[2] * p[2];
              // check if lower with squared values to avoid square root
              if (d2 < r2) {
                minDistance = 0;
                // within a circle
                return true;
              }
              const d = Math.sqrt(d2) - p[2];
              if (d < minDistance) {
                minDistance = d;
              }
            }
            return !minDistance || x1 > rx2 || x2 < rx1 || y1 > ry2 || y2 < ry1; // or outside search area
          });

          if (
            minDistance > bestDistance
            //  && minDistance > targetMinDistance
          ) {
            bestX = x;
            bestY = y;
            bestDistance = minDistance;
          }
        }

        if (bestX && bestY) {
          const best: [number, number, number] = [
            bestX,
            bestY,
            Math.min(
              bestDistance,
              bestX,
              bestY,
              Math.abs(elmWidth - bestX),
              Math.abs(elmHeight - bestY)
            ) - padding,
          ];
          quadtree.add(best);
          return best;
        }
      };
    }
  });
</script>

<MagnetSection>
  <div
    id="tech-stack"
    class="w-full h-full"
    bind:clientWidth={elmWidth}
    bind:clientHeight={elmHeight}
  />
</MagnetSection>
