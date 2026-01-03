import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkns")
export default class BknController {
  @operation({
    summary: "Get Bkns",
  })
  @get()
  static getBkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkn",
  })
  @post("{id}")
  static createBkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
