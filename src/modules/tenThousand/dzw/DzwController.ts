import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzws")
export default class DzwController {
  @operation({
    summary: "Get Dzws",
  })
  @get()
  static getDzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzw",
  })
  @post("{id}")
  static createDzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
