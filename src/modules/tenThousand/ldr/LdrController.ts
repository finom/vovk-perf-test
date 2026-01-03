import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldrs")
export default class LdrController {
  @operation({
    summary: "Get Ldrs",
  })
  @get()
  static getLdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldr",
  })
  @post("{id}")
  static createLdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
