import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljs")
export default class LjsController {
  @operation({
    summary: "Get Ljs",
  })
  @get()
  static getLjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljs",
  })
  @post("{id}")
  static createLjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
