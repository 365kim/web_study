import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
} from 'react-dom/test-utils';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import VerticalTimelineElement from '../src/VerticalTimelineElement';

beforeEach(() => {
  mockAllIsIntersecting(true);
});

describe('VerticalTimeline', () => {
  it('should have the vertical-timeline-element classname', () => {
    const component = renderIntoDocument(<VerticalTimelineElement />);
    scryRenderedDOMComponentsWithClass(component, 'vertical-timeline-element');
  });

  it('should have the vertical-timeline-element--right classname', () => {
    const component = renderIntoDocument(
      <VerticalTimelineElement position="right" />
    );
    scryRenderedDOMComponentsWithClass(
      component,
      'vertical-timeline-element--right'
    );
  });

  describe('when children is empty', () => {
    it('should have the vertical-timeline-element--no-children classname', () => {
      const component = renderIntoDocument(<VerticalTimelineElement />);
      scryRenderedDOMComponentsWithClass(
        component,
        'vertical-timeline-element--no-children'
      );
    });

    it('should have the vertical-timeline-element--no-children classname', () => {
      const componentWithDate = renderIntoDocument(
        <VerticalTimelineElement date="2018" />
      );
      scryRenderedDOMComponentsWithClass(
        componentWithDate,
        'vertical-timeline-element--no-children'
      );
    });

    it('should not have the vertical-timeline-element--no-children classname', () => {
      const component = renderIntoDocument(
        <VerticalTimelineElement>
          <div>My Child</div>
        </VerticalTimelineElement>
      );
      expect(
        scryRenderedDOMComponentsWithClass(
          component,
          'vertical-timeline-element--no-children'
        ).length
      ).toBe(0);
    });
  });
});
