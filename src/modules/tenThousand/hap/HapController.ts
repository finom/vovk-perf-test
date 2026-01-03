import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haps")
export default class HapController {
  @operation({
    summary: "Get Haps",
  })
  @get()
  static getHaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hap",
  })
  @post("{id}")
  static createHap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
