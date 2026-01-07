import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiy")
export default class EiyController {
  @operation({
    summary: "Get Eiy",
  })
  @get()
  static getEiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiy",
  })
  @post("{id}")
  static createEiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
