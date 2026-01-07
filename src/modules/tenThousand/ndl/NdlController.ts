import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndl")
export default class NdlController {
  @operation({
    summary: "Get Ndl",
  })
  @get()
  static getNdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndl",
  })
  @post("{id}")
  static createNdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
