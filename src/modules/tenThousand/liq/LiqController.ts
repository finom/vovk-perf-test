import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liqs")
export default class LiqController {
  @operation({
    summary: "Get Liqs",
  })
  @get()
  static getLiqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liq",
  })
  @post("{id}")
  static createLiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
