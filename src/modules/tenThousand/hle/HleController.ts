import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hles")
export default class HleController {
  @operation({
    summary: "Get Hles",
  })
  @get()
  static getHles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hle",
  })
  @post("{id}")
  static createHle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
