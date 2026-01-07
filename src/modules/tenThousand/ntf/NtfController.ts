import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntf")
export default class NtfController {
  @operation({
    summary: "Get Ntf",
  })
  @get()
  static getNtf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntf",
  })
  @post("{id}")
  static createNtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
