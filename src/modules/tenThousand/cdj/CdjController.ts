import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdj")
export default class CdjController {
  @operation({
    summary: "Get Cdj",
  })
  @get()
  static getCdj = procedure({
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
