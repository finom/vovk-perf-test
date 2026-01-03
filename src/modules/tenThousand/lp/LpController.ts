import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lps")
export default class LpController {
  @operation({
    summary: "Get Lps",
  })
  @get()
  static getLps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lp",
  })
  @post("{id}")
  static createLp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
