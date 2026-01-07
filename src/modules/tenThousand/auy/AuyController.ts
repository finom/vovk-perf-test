import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auy")
export default class AuyController {
  @operation({
    summary: "Get Auy",
  })
  @get()
  static getAuy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auy",
  })
  @post("{id}")
  static createAuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
