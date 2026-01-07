import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbe")
export default class HbeController {
  @operation({
    summary: "Get Hbe",
  })
  @get()
  static getHbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbe",
  })
  @post("{id}")
  static createHbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
