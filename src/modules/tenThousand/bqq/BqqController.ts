import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqqs")
export default class BqqController {
  @operation({
    summary: "Get Bqqs",
  })
  @get()
  static getBqqs = procedure({
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
