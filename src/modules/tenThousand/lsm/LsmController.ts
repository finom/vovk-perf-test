import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsms")
export default class LsmController {
  @operation({
    summary: "Get Lsms",
  })
  @get()
  static getLsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsm",
  })
  @post("{id}")
  static createLsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
