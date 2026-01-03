import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxhs")
export default class CxhController {
  @operation({
    summary: "Get Cxhs",
  })
  @get()
  static getCxhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxh",
  })
  @post("{id}")
  static createCxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
