import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgws")
export default class FgwController {
  @operation({
    summary: "Get Fgws",
  })
  @get()
  static getFgws = procedure({
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
