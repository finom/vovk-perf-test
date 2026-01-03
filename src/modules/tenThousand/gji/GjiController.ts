import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjis")
export default class GjiController {
  @operation({
    summary: "Get Gjis",
  })
  @get()
  static getGjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gji",
  })
  @post("{id}")
  static createGji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
