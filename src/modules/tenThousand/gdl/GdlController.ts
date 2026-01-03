import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdls")
export default class GdlController {
  @operation({
    summary: "Get Gdls",
  })
  @get()
  static getGdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdl",
  })
  @post("{id}")
  static createGdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
