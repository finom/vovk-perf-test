import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivls")
export default class IvlController {
  @operation({
    summary: "Get Ivls",
  })
  @get()
  static getIvls = procedure({
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
