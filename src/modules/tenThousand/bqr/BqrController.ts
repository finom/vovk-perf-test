import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqr")
export default class BqrController {
  @operation({
    summary: "Get Bqr",
  })
  @get()
  static getBqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqr",
  })
  @post("{id}")
  static createBqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
