import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ark")
export default class ArkController {
  @operation({
    summary: "Get Ark",
  })
  @get()
  static getArk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ark",
  })
  @post("{id}")
  static createArk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
