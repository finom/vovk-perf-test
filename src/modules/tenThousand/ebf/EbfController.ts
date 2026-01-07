import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebf")
export default class EbfController {
  @operation({
    summary: "Get Ebf",
  })
  @get()
  static getEbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebf",
  })
  @post("{id}")
  static createEbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
