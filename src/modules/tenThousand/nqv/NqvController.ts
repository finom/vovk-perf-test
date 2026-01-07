import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqv")
export default class NqvController {
  @operation({
    summary: "Get Nqv",
  })
  @get()
  static getNqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqv",
  })
  @post("{id}")
  static createNqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
