import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lghs")
export default class LghController {
  @operation({
    summary: "Get Lghs",
  })
  @get()
  static getLghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgh",
  })
  @post("{id}")
  static createLgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
