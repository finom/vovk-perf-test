import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bku")
export default class BkuController {
  @operation({
    summary: "Get Bku",
  })
  @get()
  static getBku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bku",
  })
  @post("{id}")
  static createBku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
