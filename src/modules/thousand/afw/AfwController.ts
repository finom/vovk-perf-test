import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afw")
export default class AfwController {
  @operation({
    summary: "Get Afw",
  })
  @get()
  static getAfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afw",
  })
  @post("{id}")
  static createAfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
