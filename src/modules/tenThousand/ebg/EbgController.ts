import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebg")
export default class EbgController {
  @operation({
    summary: "Get Ebg",
  })
  @get()
  static getEbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebg",
  })
  @post("{id}")
  static createEbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
