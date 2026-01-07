import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exy")
export default class ExyController {
  @operation({
    summary: "Get Exy",
  })
  @get()
  static getExy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exy",
  })
  @post("{id}")
  static createExy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
