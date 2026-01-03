import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhis")
export default class HhiController {
  @operation({
    summary: "Get Hhis",
  })
  @get()
  static getHhis = procedure({
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
