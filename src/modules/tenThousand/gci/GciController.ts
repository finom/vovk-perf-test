import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcis")
export default class GciController {
  @operation({
    summary: "Get Gcis",
  })
  @get()
  static getGcis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gci",
  })
  @post("{id}")
  static createGci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
