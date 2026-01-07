import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lni")
export default class LniController {
  @operation({
    summary: "Get Lni",
  })
  @get()
  static getLni = procedure({
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
