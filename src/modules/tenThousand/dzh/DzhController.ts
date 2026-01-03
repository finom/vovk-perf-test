import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzhs")
export default class DzhController {
  @operation({
    summary: "Get Dzhs",
  })
  @get()
  static getDzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzh",
  })
  @post("{id}")
  static createDzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
