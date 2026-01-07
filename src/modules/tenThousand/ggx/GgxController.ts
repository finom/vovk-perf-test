import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggx")
export default class GgxController {
  @operation({
    summary: "Get Ggx",
  })
  @get()
  static getGgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggx",
  })
  @post("{id}")
  static createGgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
