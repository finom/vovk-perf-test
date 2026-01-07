import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efx")
export default class EfxController {
  @operation({
    summary: "Get Efx",
  })
  @get()
  static getEfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efx",
  })
  @post("{id}")
  static createEfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
