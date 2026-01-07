import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mki")
export default class MkiController {
  @operation({
    summary: "Get Mki",
  })
  @get()
  static getMki = procedure({
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
