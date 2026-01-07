import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkq")
export default class BkqController {
  @operation({
    summary: "Get Bkq",
  })
  @get()
  static getBkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkq",
  })
  @post("{id}")
  static createBkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
