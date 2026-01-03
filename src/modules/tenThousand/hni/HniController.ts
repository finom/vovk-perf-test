import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnis")
export default class HniController {
  @operation({
    summary: "Get Hnis",
  })
  @get()
  static getHnis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hni",
  })
  @post("{id}")
  static createHni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
