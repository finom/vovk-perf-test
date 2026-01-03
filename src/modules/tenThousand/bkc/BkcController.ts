import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkcs")
export default class BkcController {
  @operation({
    summary: "Get Bkcs",
  })
  @get()
  static getBkcs = procedure({
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
