import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebp")
export default class EbpController {
  @operation({
    summary: "Get Ebp",
  })
  @get()
  static getEbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebp",
  })
  @post("{id}")
  static createEbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
