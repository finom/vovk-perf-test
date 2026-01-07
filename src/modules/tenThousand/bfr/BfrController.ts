import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfr")
export default class BfrController {
  @operation({
    summary: "Get Bfr",
  })
  @get()
  static getBfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfr",
  })
  @post("{id}")
  static createBfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
