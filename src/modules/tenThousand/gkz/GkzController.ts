import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkz")
export default class GkzController {
  @operation({
    summary: "Get Gkz",
  })
  @get()
  static getGkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkz",
  })
  @post("{id}")
  static createGkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
