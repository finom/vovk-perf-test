import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kso")
export default class KsoController {
  @operation({
    summary: "Get Kso",
  })
  @get()
  static getKso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kso",
  })
  @post("{id}")
  static createKso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
