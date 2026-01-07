import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsq")
export default class LsqController {
  @operation({
    summary: "Get Lsq",
  })
  @get()
  static getLsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsq",
  })
  @post("{id}")
  static createLsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
