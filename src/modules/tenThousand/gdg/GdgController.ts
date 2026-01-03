import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdgs")
export default class GdgController {
  @operation({
    summary: "Get Gdgs",
  })
  @get()
  static getGdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdg",
  })
  @post("{id}")
  static createGdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
