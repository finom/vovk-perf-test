import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fogs")
export default class FogController {
  @operation({
    summary: "Get Fogs",
  })
  @get()
  static getFogs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fog",
  })
  @post("{id}")
  static createFog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
