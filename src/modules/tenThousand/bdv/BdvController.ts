import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdv")
export default class BdvController {
  @operation({
    summary: "Get Bdv",
  })
  @get()
  static getBdv = procedure({
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
