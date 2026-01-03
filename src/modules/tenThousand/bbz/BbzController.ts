import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbzs")
export default class BbzController {
  @operation({
    summary: "Get Bbzs",
  })
  @get()
  static getBbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbz",
  })
  @post("{id}")
  static createBbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
