import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebk")
export default class EbkController {
  @operation({
    summary: "Get Ebk",
  })
  @get()
  static getEbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebk",
  })
  @post("{id}")
  static createEbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
