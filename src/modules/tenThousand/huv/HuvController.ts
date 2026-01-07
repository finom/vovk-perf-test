import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huv")
export default class HuvController {
  @operation({
    summary: "Get Huv",
  })
  @get()
  static getHuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huv",
  })
  @post("{id}")
  static createHuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
