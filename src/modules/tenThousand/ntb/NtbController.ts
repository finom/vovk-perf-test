import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntb")
export default class NtbController {
  @operation({
    summary: "Get Ntb",
  })
  @get()
  static getNtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntb",
  })
  @post("{id}")
  static createNtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
