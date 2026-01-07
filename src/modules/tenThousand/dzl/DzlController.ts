import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzl")
export default class DzlController {
  @operation({
    summary: "Get Dzl",
  })
  @get()
  static getDzl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzl",
  })
  @post("{id}")
  static createDzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
