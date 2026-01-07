import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkr")
export default class BkrController {
  @operation({
    summary: "Get Bkr",
  })
  @get()
  static getBkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkr",
  })
  @post("{id}")
  static createBkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
