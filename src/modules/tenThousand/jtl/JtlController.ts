import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtls")
export default class JtlController {
  @operation({
    summary: "Get Jtls",
  })
  @get()
  static getJtls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtl",
  })
  @post("{id}")
  static createJtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
