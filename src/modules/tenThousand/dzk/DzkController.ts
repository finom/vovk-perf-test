import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzks")
export default class DzkController {
  @operation({
    summary: "Get Dzks",
  })
  @get()
  static getDzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzk",
  })
  @post("{id}")
  static createDzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
