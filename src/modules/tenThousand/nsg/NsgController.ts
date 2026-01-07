import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsg")
export default class NsgController {
  @operation({
    summary: "Get Nsg",
  })
  @get()
  static getNsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsg",
  })
  @post("{id}")
  static createNsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
