import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cw")
export default class CwController {
  @operation({
    summary: "Get Cw",
  })
  @get()
  static getCw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cw",
  })
  @post("{id}")
  static createCw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
