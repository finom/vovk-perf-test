import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmg")
export default class MmgController {
  @operation({
    summary: "Get Mmg",
  })
  @get()
  static getMmg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmg",
  })
  @post("{id}")
  static createMmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
