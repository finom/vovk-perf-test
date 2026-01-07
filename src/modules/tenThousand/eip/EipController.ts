import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eip")
export default class EipController {
  @operation({
    summary: "Get Eip",
  })
  @get()
  static getEip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eip",
  })
  @post("{id}")
  static createEip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
