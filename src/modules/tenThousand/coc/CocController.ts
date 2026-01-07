import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coc")
export default class CocController {
  @operation({
    summary: "Get Coc",
  })
  @get()
  static getCoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coc",
  })
  @post("{id}")
  static createCoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
