import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckc")
export default class CkcController {
  @operation({
    summary: "Get Ckc",
  })
  @get()
  static getCkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckc",
  })
  @post("{id}")
  static createCkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
