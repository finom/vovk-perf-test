import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaas")
export default class AaaController {
  @operation({
    summary: "Get Aaas",
  })
  @get()
  static getAaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaa",
  })
  @post("{id}")
  static createAaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
