import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brks")
export default class BrkController {
  @operation({
    summary: "Get Brks",
  })
  @get()
  static getBrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brk",
  })
  @post("{id}")
  static createBrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
