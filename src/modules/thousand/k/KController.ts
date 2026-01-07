import { procedure, prefix, get, post, operation } from "vovk";

@prefix("k")
export default class KController {
  @operation({
    summary: "Get K",
  })
  @get()
  static getK = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create K",
  })
  @post("{id}")
  static createK = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
