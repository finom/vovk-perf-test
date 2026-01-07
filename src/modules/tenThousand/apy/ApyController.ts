import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apy")
export default class ApyController {
  @operation({
    summary: "Get Apy",
  })
  @get()
  static getApy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apy",
  })
  @post("{id}")
  static createApy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
