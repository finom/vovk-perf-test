import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntms")
export default class NtmController {
  @operation({
    summary: "Get Ntms",
  })
  @get()
  static getNtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntm",
  })
  @post("{id}")
  static createNtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
