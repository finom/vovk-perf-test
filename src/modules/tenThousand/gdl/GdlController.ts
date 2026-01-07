import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdl")
export default class GdlController {
  @operation({
    summary: "Get Gdl",
  })
  @get()
  static getGdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdl",
  })
  @post("{id}")
  static createGdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
