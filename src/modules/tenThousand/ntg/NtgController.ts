import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntg")
export default class NtgController {
  @operation({
    summary: "Get Ntg",
  })
  @get()
  static getNtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntg",
  })
  @post("{id}")
  static createNtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
