import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkhs")
export default class BkhController {
  @operation({
    summary: "Get Bkhs",
  })
  @get()
  static getBkhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkh",
  })
  @post("{id}")
  static createBkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
