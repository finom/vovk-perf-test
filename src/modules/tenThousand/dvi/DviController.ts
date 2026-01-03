import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvis")
export default class DviController {
  @operation({
    summary: "Get Dvis",
  })
  @get()
  static getDvis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvi",
  })
  @post("{id}")
  static createDvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
