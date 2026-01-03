import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czbs")
export default class CzbController {
  @operation({
    summary: "Get Czbs",
  })
  @get()
  static getCzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czb",
  })
  @post("{id}")
  static createCzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
