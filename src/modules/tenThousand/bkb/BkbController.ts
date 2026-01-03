import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkbs")
export default class BkbController {
  @operation({
    summary: "Get Bkbs",
  })
  @get()
  static getBkbs = procedure({
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
