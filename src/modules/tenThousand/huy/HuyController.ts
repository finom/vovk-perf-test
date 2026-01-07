import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huy")
export default class HuyController {
  @operation({
    summary: "Get Huy",
  })
  @get()
  static getHuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huy",
  })
  @post("{id}")
  static createHuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
