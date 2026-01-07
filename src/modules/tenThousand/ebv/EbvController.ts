import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebv")
export default class EbvController {
  @operation({
    summary: "Get Ebv",
  })
  @get()
  static getEbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebv",
  })
  @post("{id}")
  static createEbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
