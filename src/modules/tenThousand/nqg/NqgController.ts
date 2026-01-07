import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqg")
export default class NqgController {
  @operation({
    summary: "Get Nqg",
  })
  @get()
  static getNqg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqg",
  })
  @post("{id}")
  static createNqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
