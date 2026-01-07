import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huy")
export default class HuyController {
  @operation({
    summary: "Get Huy",
  })
  @get()
  static getHuy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huy",
  })
  @post("{id}")
  static createHuy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
