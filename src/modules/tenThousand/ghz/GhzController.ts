import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghz")
export default class GhzController {
  @operation({
    summary: "Get Ghz",
  })
  @get()
  static getGhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghz",
  })
  @post("{id}")
  static createGhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
