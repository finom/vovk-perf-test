import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnas")
export default class CnaController {
  @operation({
    summary: "Get Cnas",
  })
  @get()
  static getCnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cna",
  })
  @post("{id}")
  static createCna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
