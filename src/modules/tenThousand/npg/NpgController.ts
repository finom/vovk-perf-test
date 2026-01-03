import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npgs")
export default class NpgController {
  @operation({
    summary: "Get Npgs",
  })
  @get()
  static getNpgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npg",
  })
  @post("{id}")
  static createNpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
