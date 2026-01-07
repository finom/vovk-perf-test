import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgc")
export default class LgcController {
  @operation({
    summary: "Get Lgc",
  })
  @get()
  static getLgc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgc",
  })
  @post("{id}")
  static createLgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
