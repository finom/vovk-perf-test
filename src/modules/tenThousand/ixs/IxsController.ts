import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixs")
export default class IxsController {
  @operation({
    summary: "Get Ixs",
  })
  @get()
  static getIxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixs",
  })
  @post("{id}")
  static createIxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
