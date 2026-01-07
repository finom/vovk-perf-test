import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgq")
export default class LgqController {
  @operation({
    summary: "Get Lgq",
  })
  @get()
  static getLgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgq",
  })
  @post("{id}")
  static createLgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
