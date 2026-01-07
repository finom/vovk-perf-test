import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bss")
export default class BssController {
  @operation({
    summary: "Get Bss",
  })
  @get()
  static getBss = procedure({
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
