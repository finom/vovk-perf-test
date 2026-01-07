import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eku")
export default class EkuController {
  @operation({
    summary: "Get Eku",
  })
  @get()
  static getEku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eku",
  })
  @post("{id}")
  static createEku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
