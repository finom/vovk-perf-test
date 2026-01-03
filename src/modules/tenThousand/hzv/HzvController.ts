import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzvs")
export default class HzvController {
  @operation({
    summary: "Get Hzvs",
  })
  @get()
  static getHzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzv",
  })
  @post("{id}")
  static createHzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
