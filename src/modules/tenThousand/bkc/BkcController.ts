import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkc")
export default class BkcController {
  @operation({
    summary: "Get Bkc",
  })
  @get()
  static getBkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkc",
  })
  @post("{id}")
  static createBkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
