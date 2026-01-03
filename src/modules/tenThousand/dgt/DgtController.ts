import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgts")
export default class DgtController {
  @operation({
    summary: "Get Dgts",
  })
  @get()
  static getDgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgt",
  })
  @post("{id}")
  static createDgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
