import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dges")
export default class DgeController {
  @operation({
    summary: "Get Dges",
  })
  @get()
  static getDges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dge",
  })
  @post("{id}")
  static createDge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
