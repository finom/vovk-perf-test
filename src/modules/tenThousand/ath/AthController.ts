import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ath")
export default class AthController {
  @operation({
    summary: "Get Ath",
  })
  @get()
  static getAth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ath",
  })
  @post("{id}")
  static createAth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
