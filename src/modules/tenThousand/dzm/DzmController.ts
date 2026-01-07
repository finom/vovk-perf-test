import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzm")
export default class DzmController {
  @operation({
    summary: "Get Dzm",
  })
  @get()
  static getDzm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzm",
  })
  @post("{id}")
  static createDzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
