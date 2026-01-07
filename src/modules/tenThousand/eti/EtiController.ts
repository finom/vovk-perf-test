import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eti")
export default class EtiController {
  @operation({
    summary: "Get Eti",
  })
  @get()
  static getEti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eti",
  })
  @post("{id}")
  static createEti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
