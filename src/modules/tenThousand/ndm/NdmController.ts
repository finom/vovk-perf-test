import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndm")
export default class NdmController {
  @operation({
    summary: "Get Ndm",
  })
  @get()
  static getNdm = procedure({
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
