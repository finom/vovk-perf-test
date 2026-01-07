import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fog")
export default class FogController {
  @operation({
    summary: "Get Fog",
  })
  @get()
  static getFog = procedure({
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
