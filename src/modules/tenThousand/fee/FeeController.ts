import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fee")
export default class FeeController {
  @operation({
    summary: "Get Fee",
  })
  @get()
  static getFee = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fee",
  })
  @post("{id}")
  static createFee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
