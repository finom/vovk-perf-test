import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnds")
export default class MndController {
  @operation({
    summary: "Get Mnds",
  })
  @get()
  static getMnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnd",
  })
  @post("{id}")
  static createMnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
