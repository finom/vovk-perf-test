import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcq")
export default class BcqController {
  @operation({
    summary: "Get Bcq",
  })
  @get()
  static getBcq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcq",
  })
  @post("{id}")
  static createBcq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
