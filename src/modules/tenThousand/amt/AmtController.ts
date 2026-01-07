import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amt")
export default class AmtController {
  @operation({
    summary: "Get Amt",
  })
  @get()
  static getAmt = procedure({
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
