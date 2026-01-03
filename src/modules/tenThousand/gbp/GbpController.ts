import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbps")
export default class GbpController {
  @operation({
    summary: "Get Gbps",
  })
  @get()
  static getGbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbp",
  })
  @post("{id}")
  static createGbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
