import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjis")
export default class KjiController {
  @operation({
    summary: "Get Kjis",
  })
  @get()
  static getKjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kji",
  })
  @post("{id}")
  static createKji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
