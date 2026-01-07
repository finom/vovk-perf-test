import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdx")
export default class GdxController {
  @operation({
    summary: "Get Gdx",
  })
  @get()
  static getGdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdx",
  })
  @post("{id}")
  static createGdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
