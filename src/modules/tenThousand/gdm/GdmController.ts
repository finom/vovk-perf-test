import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdms")
export default class GdmController {
  @operation({
    summary: "Get Gdms",
  })
  @get()
  static getGdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdm",
  })
  @post("{id}")
  static createGdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
