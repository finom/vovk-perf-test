import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjt")
export default class HjtController {
  @operation({
    summary: "Get Hjt",
  })
  @get()
  static getHjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjt",
  })
  @post("{id}")
  static createHjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
