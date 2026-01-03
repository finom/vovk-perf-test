import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdjs")
export default class CdjController {
  @operation({
    summary: "Get Cdjs",
  })
  @get()
  static getCdjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdj",
  })
  @post("{id}")
  static createCdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
