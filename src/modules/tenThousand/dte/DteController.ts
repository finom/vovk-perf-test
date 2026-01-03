import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtes")
export default class DteController {
  @operation({
    summary: "Get Dtes",
  })
  @get()
  static getDtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dte",
  })
  @post("{id}")
  static createDte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
