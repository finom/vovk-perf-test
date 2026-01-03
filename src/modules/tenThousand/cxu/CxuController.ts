import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxus")
export default class CxuController {
  @operation({
    summary: "Get Cxus",
  })
  @get()
  static getCxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxu",
  })
  @post("{id}")
  static createCxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
