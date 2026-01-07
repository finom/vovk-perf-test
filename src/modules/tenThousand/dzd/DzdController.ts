import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzd")
export default class DzdController {
  @operation({
    summary: "Get Dzd",
  })
  @get()
  static getDzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzd",
  })
  @post("{id}")
  static createDzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
