import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndn")
export default class NdnController {
  @operation({
    summary: "Get Ndn",
  })
  @get()
  static getNdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndn",
  })
  @post("{id}")
  static createNdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
