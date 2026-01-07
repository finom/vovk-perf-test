import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhr")
export default class BhrController {
  @operation({
    summary: "Get Bhr",
  })
  @get()
  static getBhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhr",
  })
  @post("{id}")
  static createBhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
