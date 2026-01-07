import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhi")
export default class HhiController {
  @operation({
    summary: "Get Hhi",
  })
  @get()
  static getHhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhi",
  })
  @post("{id}")
  static createHhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
