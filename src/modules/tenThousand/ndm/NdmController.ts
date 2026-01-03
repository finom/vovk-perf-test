import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndms")
export default class NdmController {
  @operation({
    summary: "Get Ndms",
  })
  @get()
  static getNdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndm",
  })
  @post("{id}")
  static createNdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
