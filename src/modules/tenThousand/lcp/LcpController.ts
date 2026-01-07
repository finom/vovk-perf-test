import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcp")
export default class LcpController {
  @operation({
    summary: "Get Lcp",
  })
  @get()
  static getLcp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcp",
  })
  @post("{id}")
  static createLcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
