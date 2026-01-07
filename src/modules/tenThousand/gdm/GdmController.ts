import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdm")
export default class GdmController {
  @operation({
    summary: "Get Gdm",
  })
  @get()
  static getGdm = procedure({
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
