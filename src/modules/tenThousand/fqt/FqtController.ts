import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqt")
export default class FqtController {
  @operation({
    summary: "Get Fqt",
  })
  @get()
  static getFqt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqt",
  })
  @post("{id}")
  static createFqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
