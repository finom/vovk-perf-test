import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpjs")
export default class DpjController {
  @operation({
    summary: "Get Dpjs",
  })
  @get()
  static getDpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpj",
  })
  @post("{id}")
  static createDpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
