import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqd")
export default class BqdController {
  @operation({
    summary: "Get Bqd",
  })
  @get()
  static getBqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqd",
  })
  @post("{id}")
  static createBqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
