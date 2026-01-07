import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czv")
export default class CzvController {
  @operation({
    summary: "Get Czv",
  })
  @get()
  static getCzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czv",
  })
  @post("{id}")
  static createCzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
