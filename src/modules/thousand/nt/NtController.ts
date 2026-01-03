import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nts")
export default class NtController {
  @operation({
    summary: "Get Nts",
  })
  @get()
  static getNts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nt",
  })
  @post("{id}")
  static createNt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
