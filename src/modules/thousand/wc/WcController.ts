import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wcs")
export default class WcController {
  @operation({
    summary: "Get Wcs",
  })
  @get()
  static getWcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wc",
  })
  @post("{id}")
  static createWc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
