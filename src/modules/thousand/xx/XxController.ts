import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xx")
export default class XxController {
  @operation({
    summary: "Get Xx",
  })
  @get()
  static getXx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xx",
  })
  @post("{id}")
  static createXx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
