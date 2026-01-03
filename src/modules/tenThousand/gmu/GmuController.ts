import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmus")
export default class GmuController {
  @operation({
    summary: "Get Gmus",
  })
  @get()
  static getGmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmu",
  })
  @post("{id}")
  static createGmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
