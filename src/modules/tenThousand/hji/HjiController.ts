import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjis")
export default class HjiController {
  @operation({
    summary: "Get Hjis",
  })
  @get()
  static getHjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hji",
  })
  @post("{id}")
  static createHji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
