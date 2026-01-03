import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftls")
export default class FtlController {
  @operation({
    summary: "Get Ftls",
  })
  @get()
  static getFtls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftl",
  })
  @post("{id}")
  static createFtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
