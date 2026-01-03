import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecjs")
export default class EcjController {
  @operation({
    summary: "Get Ecjs",
  })
  @get()
  static getEcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecj",
  })
  @post("{id}")
  static createEcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
