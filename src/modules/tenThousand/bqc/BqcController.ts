import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqc")
export default class BqcController {
  @operation({
    summary: "Get Bqc",
  })
  @get()
  static getBqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqc",
  })
  @post("{id}")
  static createBqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
