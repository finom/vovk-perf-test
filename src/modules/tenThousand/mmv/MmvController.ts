import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmv")
export default class MmvController {
  @operation({
    summary: "Get Mmv",
  })
  @get()
  static getMmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmv",
  })
  @post("{id}")
  static createMmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
