import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fms")
export default class FmsController {
  @operation({
    summary: "Get Fms",
  })
  @get()
  static getFms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fms",
  })
  @post("{id}")
  static createFms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
