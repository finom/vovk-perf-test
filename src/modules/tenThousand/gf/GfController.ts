import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gf")
export default class GfController {
  @operation({
    summary: "Get Gf",
  })
  @get()
  static getGf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gf",
  })
  @post("{id}")
  static createGf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
