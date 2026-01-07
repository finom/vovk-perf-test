import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huv")
export default class HuvController {
  @operation({
    summary: "Get Huv",
  })
  @get()
  static getHuv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huv",
  })
  @post("{id}")
  static createHuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
