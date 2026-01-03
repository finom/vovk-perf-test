import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaps")
export default class KapController {
  @operation({
    summary: "Get Kaps",
  })
  @get()
  static getKaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kap",
  })
  @post("{id}")
  static createKap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
