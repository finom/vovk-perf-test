import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxs")
export default class CxsController {
  @operation({
    summary: "Get Cxs",
  })
  @get()
  static getCxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxs",
  })
  @post("{id}")
  static createCxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
