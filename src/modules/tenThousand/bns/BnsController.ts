import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bns")
export default class BnsController {
  @operation({
    summary: "Get Bns",
  })
  @get()
  static getBns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bns",
  })
  @post("{id}")
  static createBns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
