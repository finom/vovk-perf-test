import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzxes")
export default class DzxController {
  @operation({
    summary: "Get Dzxes",
  })
  @get()
  static getDzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzx",
  })
  @post("{id}")
  static createDzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
