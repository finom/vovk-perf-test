import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efxes")
export default class EfxController {
  @operation({
    summary: "Get Efxes",
  })
  @get()
  static getEfxes = procedure({
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
