import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmu")
export default class GmuController {
  @operation({
    summary: "Get Gmu",
  })
  @get()
  static getGmu = procedure({
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
