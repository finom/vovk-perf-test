import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ema")
export default class EmaController {
  @operation({
    summary: "Get Ema",
  })
  @get()
  static getEma = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ema",
  })
  @post("{id}")
  static createEma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
