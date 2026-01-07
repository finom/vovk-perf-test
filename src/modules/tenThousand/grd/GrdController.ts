import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grd")
export default class GrdController {
  @operation({
    summary: "Get Grd",
  })
  @get()
  static getGrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grd",
  })
  @post("{id}")
  static createGrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
