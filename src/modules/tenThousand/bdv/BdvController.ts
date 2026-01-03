import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdvs")
export default class BdvController {
  @operation({
    summary: "Get Bdvs",
  })
  @get()
  static getBdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdv",
  })
  @post("{id}")
  static createBdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
