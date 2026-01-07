import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntm")
export default class NtmController {
  @operation({
    summary: "Get Ntm",
  })
  @get()
  static getNtm = procedure({
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
