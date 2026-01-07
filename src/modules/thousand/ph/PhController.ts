import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ph")
export default class PhController {
  @operation({
    summary: "Get Ph",
  })
  @get()
  static getPh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ph",
  })
  @post("{id}")
  static createPh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
