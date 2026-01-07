import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqq")
export default class BqqController {
  @operation({
    summary: "Get Bqq",
  })
  @get()
  static getBqq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqq",
  })
  @post("{id}")
  static createBqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
