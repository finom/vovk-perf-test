import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntds")
export default class NtdController {
  @operation({
    summary: "Get Ntds",
  })
  @get()
  static getNtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntd",
  })
  @post("{id}")
  static createNtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
