import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bao")
export default class BaoController {
  @operation({
    summary: "Get Bao",
  })
  @get()
  static getBao = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bao",
  })
  @post("{id}")
  static createBao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
