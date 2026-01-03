import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnis")
export default class LniController {
  @operation({
    summary: "Get Lnis",
  })
  @get()
  static getLnis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lni",
  })
  @post("{id}")
  static createLni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
