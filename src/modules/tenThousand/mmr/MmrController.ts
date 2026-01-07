import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmr")
export default class MmrController {
  @operation({
    summary: "Get Mmr",
  })
  @get()
  static getMmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmr",
  })
  @post("{id}")
  static createMmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
