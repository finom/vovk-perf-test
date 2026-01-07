import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gt")
export default class GtController {
  @operation({
    summary: "Get Gt",
  })
  @get()
  static getGt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gt",
  })
  @post("{id}")
  static createGt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
