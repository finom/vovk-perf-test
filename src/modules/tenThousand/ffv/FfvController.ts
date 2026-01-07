import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffv")
export default class FfvController {
  @operation({
    summary: "Get Ffv",
  })
  @get()
  static getFfv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffv",
  })
  @post("{id}")
  static createFfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
