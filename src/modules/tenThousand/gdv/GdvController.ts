import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdv")
export default class GdvController {
  @operation({
    summary: "Get Gdv",
  })
  @get()
  static getGdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdv",
  })
  @post("{id}")
  static createGdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
