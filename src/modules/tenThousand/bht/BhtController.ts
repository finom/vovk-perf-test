import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bht")
export default class BhtController {
  @operation({
    summary: "Get Bht",
  })
  @get()
  static getBht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bht",
  })
  @post("{id}")
  static createBht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
