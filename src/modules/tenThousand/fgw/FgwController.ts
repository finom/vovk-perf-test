import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgw")
export default class FgwController {
  @operation({
    summary: "Get Fgw",
  })
  @get()
  static getFgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgw",
  })
  @post("{id}")
  static createFgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
