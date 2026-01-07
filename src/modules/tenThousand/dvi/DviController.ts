import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvi")
export default class DviController {
  @operation({
    summary: "Get Dvi",
  })
  @get()
  static getDvi = procedure({
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
