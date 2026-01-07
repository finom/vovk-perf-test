import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bki")
export default class BkiController {
  @operation({
    summary: "Get Bki",
  })
  @get()
  static getBki = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bki",
  })
  @post("{id}")
  static createBki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
