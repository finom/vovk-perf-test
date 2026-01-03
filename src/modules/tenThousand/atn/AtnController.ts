import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atns")
export default class AtnController {
  @operation({
    summary: "Get Atns",
  })
  @get()
  static getAtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atn",
  })
  @post("{id}")
  static createAtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
