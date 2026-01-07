import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldr")
export default class LdrController {
  @operation({
    summary: "Get Ldr",
  })
  @get()
  static getLdr = procedure({
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
