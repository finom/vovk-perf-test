import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etrs")
export default class EtrController {
  @operation({
    summary: "Get Etrs",
  })
  @get()
  static getEtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etr",
  })
  @post("{id}")
  static createEtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
