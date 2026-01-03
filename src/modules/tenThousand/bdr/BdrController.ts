import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdrs")
export default class BdrController {
  @operation({
    summary: "Get Bdrs",
  })
  @get()
  static getBdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdr",
  })
  @post("{id}")
  static createBdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
