import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsfs")
export default class LsfController {
  @operation({
    summary: "Get Lsfs",
  })
  @get()
  static getLsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsf",
  })
  @post("{id}")
  static createLsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
