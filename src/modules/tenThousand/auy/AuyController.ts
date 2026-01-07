import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auy")
export default class AuyController {
  @operation({
    summary: "Get Auy",
  })
  @get()
  static getAuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auy",
  })
  @post("{id}")
  static createAuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
