import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckks")
export default class CkkController {
  @operation({
    summary: "Get Ckks",
  })
  @get()
  static getCkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckk",
  })
  @post("{id}")
  static createCkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
