import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzv")
export default class HzvController {
  @operation({
    summary: "Get Hzv",
  })
  @get()
  static getHzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzv",
  })
  @post("{id}")
  static createHzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
