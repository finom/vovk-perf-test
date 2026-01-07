import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sz")
export default class SzController {
  @operation({
    summary: "Get Sz",
  })
  @get()
  static getSz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sz",
  })
  @post("{id}")
  static createSz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
