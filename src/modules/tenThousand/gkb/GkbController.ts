import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkb")
export default class GkbController {
  @operation({
    summary: "Get Gkb",
  })
  @get()
  static getGkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkb",
  })
  @post("{id}")
  static createGkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
