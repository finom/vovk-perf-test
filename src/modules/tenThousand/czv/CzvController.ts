import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czvs")
export default class CzvController {
  @operation({
    summary: "Get Czvs",
  })
  @get()
  static getCzvs = procedure({
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
