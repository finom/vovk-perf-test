import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atn")
export default class AtnController {
  @operation({
    summary: "Get Atn",
  })
  @get()
  static getAtn = procedure({
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
