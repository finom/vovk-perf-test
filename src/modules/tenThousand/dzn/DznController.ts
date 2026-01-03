import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzns")
export default class DznController {
  @operation({
    summary: "Get Dzns",
  })
  @get()
  static getDzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzn",
  })
  @post("{id}")
  static createDzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
