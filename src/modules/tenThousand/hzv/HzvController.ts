import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzv")
export default class HzvController {
  @operation({
    summary: "Get Hzv",
  })
  @get()
  static getHzv = procedure({
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
