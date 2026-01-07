import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkt")
export default class BktController {
  @operation({
    summary: "Get Bkt",
  })
  @get()
  static getBkt = procedure({
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
