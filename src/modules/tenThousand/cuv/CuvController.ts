import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuvs")
export default class CuvController {
  @operation({
    summary: "Get Cuvs",
  })
  @get()
  static getCuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuv",
  })
  @post("{id}")
  static createCuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
