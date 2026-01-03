import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzs")
export default class DzsController {
  @operation({
    summary: "Get Dzs",
  })
  @get()
  static getDzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzs",
  })
  @post("{id}")
  static createDzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
