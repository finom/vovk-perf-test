import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkw")
export default class GkwController {
  @operation({
    summary: "Get Gkw",
  })
  @get()
  static getGkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkw",
  })
  @post("{id}")
  static createGkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
