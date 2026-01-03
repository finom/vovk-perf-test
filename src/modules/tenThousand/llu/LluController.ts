import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llus")
export default class LluController {
  @operation({
    summary: "Get Llus",
  })
  @get()
  static getLlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llu",
  })
  @post("{id}")
  static createLlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
