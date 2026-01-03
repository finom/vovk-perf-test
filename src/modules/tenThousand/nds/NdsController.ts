import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nds")
export default class NdsController {
  @operation({
    summary: "Get Nds",
  })
  @get()
  static getNds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nds",
  })
  @post("{id}")
  static createNds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
