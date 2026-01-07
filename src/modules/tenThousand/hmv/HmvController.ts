import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmv")
export default class HmvController {
  @operation({
    summary: "Get Hmv",
  })
  @get()
  static getHmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmv",
  })
  @post("{id}")
  static createHmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
