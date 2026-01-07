import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftl")
export default class FtlController {
  @operation({
    summary: "Get Ftl",
  })
  @get()
  static getFtl = procedure({
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
