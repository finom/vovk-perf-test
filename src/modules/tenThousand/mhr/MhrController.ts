import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhr")
export default class MhrController {
  @operation({
    summary: "Get Mhr",
  })
  @get()
  static getMhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhr",
  })
  @post("{id}")
  static createMhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
