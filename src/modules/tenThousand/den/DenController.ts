import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dens")
export default class DenController {
  @operation({
    summary: "Get Dens",
  })
  @get()
  static getDens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Den",
  })
  @post("{id}")
  static createDen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
