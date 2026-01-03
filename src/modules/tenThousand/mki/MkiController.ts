import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkis")
export default class MkiController {
  @operation({
    summary: "Get Mkis",
  })
  @get()
  static getMkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mki",
  })
  @post("{id}")
  static createMki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
