import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cby")
export default class CbyController {
  @operation({
    summary: "Get Cby",
  })
  @get()
  static getCby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cby",
  })
  @post("{id}")
  static createCby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
