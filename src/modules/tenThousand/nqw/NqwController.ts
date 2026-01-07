import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqw")
export default class NqwController {
  @operation({
    summary: "Get Nqw",
  })
  @get()
  static getNqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqw",
  })
  @post("{id}")
  static createNqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
