import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bts")
export default class BtsController {
  @operation({
    summary: "Get Bts",
  })
  @get()
  static getBts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bts",
  })
  @post("{id}")
  static createBts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
