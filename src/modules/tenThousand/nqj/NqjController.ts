import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqj")
export default class NqjController {
  @operation({
    summary: "Get Nqj",
  })
  @get()
  static getNqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqj",
  })
  @post("{id}")
  static createNqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
