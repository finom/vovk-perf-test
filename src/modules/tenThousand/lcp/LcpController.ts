import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcps")
export default class LcpController {
  @operation({
    summary: "Get Lcps",
  })
  @get()
  static getLcps = procedure({
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
