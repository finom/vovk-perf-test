import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsjs")
export default class BsjController {
  @operation({
    summary: "Get Bsjs",
  })
  @get()
  static getBsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsj",
  })
  @post("{id}")
  static createBsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
