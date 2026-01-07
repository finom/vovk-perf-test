import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dki")
export default class DkiController {
  @operation({
    summary: "Get Dki",
  })
  @get()
  static getDki = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dki",
  })
  @post("{id}")
  static createDki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
