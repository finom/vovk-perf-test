import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baos")
export default class BaoController {
  @operation({
    summary: "Get Baos",
  })
  @get()
  static getBaos = procedure({
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
