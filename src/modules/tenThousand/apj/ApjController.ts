import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apj")
export default class ApjController {
  @operation({
    summary: "Get Apj",
  })
  @get()
  static getApj = procedure({
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
