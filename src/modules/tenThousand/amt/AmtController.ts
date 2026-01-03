import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amts")
export default class AmtController {
  @operation({
    summary: "Get Amts",
  })
  @get()
  static getAmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amt",
  })
  @post("{id}")
  static createAmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
