import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdr")
export default class CdrController {
  @operation({
    summary: "Get Cdr",
  })
  @get()
  static getCdr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdr",
  })
  @post("{id}")
  static createCdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
