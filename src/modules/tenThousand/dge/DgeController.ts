import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dge")
export default class DgeController {
  @operation({
    summary: "Get Dge",
  })
  @get()
  static getDge = procedure({
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
