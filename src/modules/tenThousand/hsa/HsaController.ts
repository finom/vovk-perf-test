import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsa")
export default class HsaController {
  @operation({
    summary: "Get Hsa",
  })
  @get()
  static getHsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsa",
  })
  @post("{id}")
  static createHsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
