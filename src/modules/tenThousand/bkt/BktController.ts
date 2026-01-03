import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkts")
export default class BktController {
  @operation({
    summary: "Get Bkts",
  })
  @get()
  static getBkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkt",
  })
  @post("{id}")
  static createBkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
