import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuts")
export default class CutController {
  @operation({
    summary: "Get Cuts",
  })
  @get()
  static getCuts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cut",
  })
  @post("{id}")
  static createCut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
