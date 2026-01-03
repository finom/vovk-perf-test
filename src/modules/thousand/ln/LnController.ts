import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lns")
export default class LnController {
  @operation({
    summary: "Get Lns",
  })
  @get()
  static getLns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ln",
  })
  @post("{id}")
  static createLn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
