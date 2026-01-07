import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gme")
export default class GmeController {
  @operation({
    summary: "Get Gme",
  })
  @get()
  static getGme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gme",
  })
  @post("{id}")
  static createGme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
