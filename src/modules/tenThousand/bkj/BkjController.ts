import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkj")
export default class BkjController {
  @operation({
    summary: "Get Bkj",
  })
  @get()
  static getBkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkj",
  })
  @post("{id}")
  static createBkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
