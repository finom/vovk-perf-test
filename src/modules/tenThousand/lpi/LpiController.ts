import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpi")
export default class LpiController {
  @operation({
    summary: "Get Lpi",
  })
  @get()
  static getLpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpi",
  })
  @post("{id}")
  static createLpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
