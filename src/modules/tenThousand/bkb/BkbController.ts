import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkb")
export default class BkbController {
  @operation({
    summary: "Get Bkb",
  })
  @get()
  static getBkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkb",
  })
  @post("{id}")
  static createBkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
