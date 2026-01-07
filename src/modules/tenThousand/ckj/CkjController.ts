import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckj")
export default class CkjController {
  @operation({
    summary: "Get Ckj",
  })
  @get()
  static getCkj = procedure({
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
