import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdis")
export default class GdiController {
  @operation({
    summary: "Get Gdis",
  })
  @get()
  static getGdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdi",
  })
  @post("{id}")
  static createGdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
