import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckjs")
export default class CkjController {
  @operation({
    summary: "Get Ckjs",
  })
  @get()
  static getCkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckj",
  })
  @post("{id}")
  static createCkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
