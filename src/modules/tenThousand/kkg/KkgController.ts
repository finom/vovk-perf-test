import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkg")
export default class KkgController {
  @operation({
    summary: "Get Kkg",
  })
  @get()
  static getKkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkg",
  })
  @post("{id}")
  static createKkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
