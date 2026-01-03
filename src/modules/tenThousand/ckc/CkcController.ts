import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckcs")
export default class CkcController {
  @operation({
    summary: "Get Ckcs",
  })
  @get()
  static getCkcs = procedure({
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
