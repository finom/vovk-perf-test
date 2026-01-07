import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nob")
export default class NobController {
  @operation({
    summary: "Get Nob",
  })
  @get()
  static getNob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nob",
  })
  @post("{id}")
  static createNob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
