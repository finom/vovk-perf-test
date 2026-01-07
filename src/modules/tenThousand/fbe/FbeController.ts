import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbe")
export default class FbeController {
  @operation({
    summary: "Get Fbe",
  })
  @get()
  static getFbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbe",
  })
  @post("{id}")
  static createFbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
