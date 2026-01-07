import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfx")
export default class KfxController {
  @operation({
    summary: "Get Kfx",
  })
  @get()
  static getKfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfx",
  })
  @post("{id}")
  static createKfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
