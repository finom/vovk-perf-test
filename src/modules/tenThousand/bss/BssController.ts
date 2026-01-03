import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsses")
export default class BssController {
  @operation({
    summary: "Get Bsses",
  })
  @get()
  static getBsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bss",
  })
  @post("{id}")
  static createBss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
