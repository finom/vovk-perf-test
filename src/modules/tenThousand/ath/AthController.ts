import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aths")
export default class AthController {
  @operation({
    summary: "Get Aths",
  })
  @get()
  static getAths = procedure({
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
