import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgfs")
export default class LgfController {
  @operation({
    summary: "Get Lgfs",
  })
  @get()
  static getLgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgf",
  })
  @post("{id}")
  static createLgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
