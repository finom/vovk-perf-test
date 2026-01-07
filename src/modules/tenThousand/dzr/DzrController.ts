import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzr")
export default class DzrController {
  @operation({
    summary: "Get Dzr",
  })
  @get()
  static getDzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzr",
  })
  @post("{id}")
  static createDzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
