import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqfs")
export default class BqfController {
  @operation({
    summary: "Get Bqfs",
  })
  @get()
  static getBqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqf",
  })
  @post("{id}")
  static createBqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
