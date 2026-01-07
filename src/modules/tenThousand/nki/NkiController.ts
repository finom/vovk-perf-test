import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nki")
export default class NkiController {
  @operation({
    summary: "Get Nki",
  })
  @get()
  static getNki = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nki",
  })
  @post("{id}")
  static createNki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
