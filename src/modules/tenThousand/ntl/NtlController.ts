import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntl")
export default class NtlController {
  @operation({
    summary: "Get Ntl",
  })
  @get()
  static getNtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntl",
  })
  @post("{id}")
  static createNtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
