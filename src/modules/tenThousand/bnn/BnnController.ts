import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnns")
export default class BnnController {
  @operation({
    summary: "Get Bnns",
  })
  @get()
  static getBnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnn",
  })
  @post("{id}")
  static createBnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
