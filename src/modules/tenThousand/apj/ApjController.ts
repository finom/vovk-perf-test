import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apjs")
export default class ApjController {
  @operation({
    summary: "Get Apjs",
  })
  @get()
  static getApjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apj",
  })
  @post("{id}")
  static createApj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
