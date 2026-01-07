import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckn")
export default class CknController {
  @operation({
    summary: "Get Ckn",
  })
  @get()
  static getCkn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckn",
  })
  @post("{id}")
  static createCkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
