import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivl")
export default class IvlController {
  @operation({
    summary: "Get Ivl",
  })
  @get()
  static getIvl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivl",
  })
  @post("{id}")
  static createIvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
