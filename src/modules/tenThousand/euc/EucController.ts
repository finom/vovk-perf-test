import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eucs")
export default class EucController {
  @operation({
    summary: "Get Eucs",
  })
  @get()
  static getEucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euc",
  })
  @post("{id}")
  static createEuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
