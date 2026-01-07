import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nct")
export default class NctController {
  @operation({
    summary: "Get Nct",
  })
  @get()
  static getNct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nct",
  })
  @post("{id}")
  static createNct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
