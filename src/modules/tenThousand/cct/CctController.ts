import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cct")
export default class CctController {
  @operation({
    summary: "Get Cct",
  })
  @get()
  static getCct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cct",
  })
  @post("{id}")
  static createCct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
