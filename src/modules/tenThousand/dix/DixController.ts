import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dix")
export default class DixController {
  @operation({
    summary: "Get Dix",
  })
  @get()
  static getDix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dix",
  })
  @post("{id}")
  static createDix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
