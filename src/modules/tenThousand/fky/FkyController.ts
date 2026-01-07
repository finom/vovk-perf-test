import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fky")
export default class FkyController {
  @operation({
    summary: "Get Fky",
  })
  @get()
  static getFky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fky",
  })
  @post("{id}")
  static createFky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
