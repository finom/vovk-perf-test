import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzz")
export default class DzzController {
  @operation({
    summary: "Get Dzz",
  })
  @get()
  static getDzz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzz",
  })
  @post("{id}")
  static createDzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
