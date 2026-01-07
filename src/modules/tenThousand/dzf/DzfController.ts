import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzf")
export default class DzfController {
  @operation({
    summary: "Get Dzf",
  })
  @get()
  static getDzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzf",
  })
  @post("{id}")
  static createDzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
