import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nens")
export default class NenController {
  @operation({
    summary: "Get Nens",
  })
  @get()
  static getNens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nen",
  })
  @post("{id}")
  static createNen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
