import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwo")
export default class CwoController {
  @operation({
    summary: "Get Cwo",
  })
  @get()
  static getCwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwo",
  })
  @post("{id}")
  static createCwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
