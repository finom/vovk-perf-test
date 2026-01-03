import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbps")
export default class MbpController {
  @operation({
    summary: "Get Mbps",
  })
  @get()
  static getMbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbp",
  })
  @post("{id}")
  static createMbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
