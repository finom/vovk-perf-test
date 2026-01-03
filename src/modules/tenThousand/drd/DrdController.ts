import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drds")
export default class DrdController {
  @operation({
    summary: "Get Drds",
  })
  @get()
  static getDrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drd",
  })
  @post("{id}")
  static createDrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
