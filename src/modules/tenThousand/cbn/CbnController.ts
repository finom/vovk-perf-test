import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbns")
export default class CbnController {
  @operation({
    summary: "Get Cbns",
  })
  @get()
  static getCbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbn",
  })
  @post("{id}")
  static createCbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
