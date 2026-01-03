import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwbs")
export default class GwbController {
  @operation({
    summary: "Get Gwbs",
  })
  @get()
  static getGwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwb",
  })
  @post("{id}")
  static createGwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
