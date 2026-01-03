import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtps")
export default class GtpController {
  @operation({
    summary: "Get Gtps",
  })
  @get()
  static getGtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtp",
  })
  @post("{id}")
  static createGtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
