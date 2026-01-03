import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyys")
export default class DyyController {
  @operation({
    summary: "Get Dyys",
  })
  @get()
  static getDyys = procedure({
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
