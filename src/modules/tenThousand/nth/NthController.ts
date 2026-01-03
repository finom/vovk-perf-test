import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nths")
export default class NthController {
  @operation({
    summary: "Get Nths",
  })
  @get()
  static getNths = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nth",
  })
  @post("{id}")
  static createNth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
