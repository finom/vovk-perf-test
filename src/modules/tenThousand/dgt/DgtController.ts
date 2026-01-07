import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgt")
export default class DgtController {
  @operation({
    summary: "Get Dgt",
  })
  @get()
  static getDgt = procedure({
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
