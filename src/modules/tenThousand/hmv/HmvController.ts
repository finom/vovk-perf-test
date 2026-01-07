import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmv")
export default class HmvController {
  @operation({
    summary: "Get Hmv",
  })
  @get()
  static getHmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmv",
  })
  @post("{id}")
  static createHmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
