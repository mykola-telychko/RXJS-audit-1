import { fromEvent, audit, interval } from 'rxjs';

// https://rxjs.dev/api/operators/audit

const clicks = fromEvent(document, 'click');

const result = clicks.pipe(audit((ev) => interval(2000)));

result.subscribe((x) => console.log(x));
