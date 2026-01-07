import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdx")
export default class GdxController {
  @operation({
    summary: "Get Gdx",
  })
  @get()
  static getGdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdx",
  })
  @post("{id}")
  static createGdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
