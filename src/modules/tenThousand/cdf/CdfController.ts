import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdfs")
export default class CdfController {
  @operation({
    summary: "Get Cdfs",
  })
  @get()
  static getCdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdf",
  })
  @post("{id}")
  static createCdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
