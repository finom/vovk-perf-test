import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzbs")
export default class DzbController {
  @operation({
    summary: "Get Dzbs",
  })
  @get()
  static getDzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzb",
  })
  @post("{id}")
  static createDzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
