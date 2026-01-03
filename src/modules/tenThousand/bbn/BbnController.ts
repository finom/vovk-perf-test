import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbns")
export default class BbnController {
  @operation({
    summary: "Get Bbns",
  })
  @get()
  static getBbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbn",
  })
  @post("{id}")
  static createBbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
