import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gm")
export default class GmController {
  @operation({
    summary: "Get Gm",
  })
  @get()
  static getGm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gm",
  })
  @post("{id}")
  static createGm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
