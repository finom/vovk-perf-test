import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcf")
export default class BcfController {
  @operation({
    summary: "Get Bcf",
  })
  @get()
  static getBcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcf",
  })
  @post("{id}")
  static createBcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
