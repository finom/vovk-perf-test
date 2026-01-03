import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmus")
export default class CmuController {
  @operation({
    summary: "Get Cmus",
  })
  @get()
  static getCmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmu",
  })
  @post("{id}")
  static createCmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
