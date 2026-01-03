import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtls")
export default class MtlController {
  @operation({
    summary: "Get Mtls",
  })
  @get()
  static getMtls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtl",
  })
  @post("{id}")
  static createMtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
