import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fots")
export default class FotController {
  @operation({
    summary: "Get Fots",
  })
  @get()
  static getFots = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fot",
  })
  @post("{id}")
  static createFot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
