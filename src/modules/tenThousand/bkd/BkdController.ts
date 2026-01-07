import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkd")
export default class BkdController {
  @operation({
    summary: "Get Bkd",
  })
  @get()
  static getBkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkd",
  })
  @post("{id}")
  static createBkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
