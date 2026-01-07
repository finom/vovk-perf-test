import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyy")
export default class DyyController {
  @operation({
    summary: "Get Dyy",
  })
  @get()
  static getDyy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyy",
  })
  @post("{id}")
  static createDyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
