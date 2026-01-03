import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlts")
export default class NltController {
  @operation({
    summary: "Get Nlts",
  })
  @get()
  static getNlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlt",
  })
  @post("{id}")
  static createNlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
