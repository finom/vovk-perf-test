import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntks")
export default class NtkController {
  @operation({
    summary: "Get Ntks",
  })
  @get()
  static getNtks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntk",
  })
  @post("{id}")
  static createNtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
