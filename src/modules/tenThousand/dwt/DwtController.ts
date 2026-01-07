import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwt")
export default class DwtController {
  @operation({
    summary: "Get Dwt",
  })
  @get()
  static getDwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwt",
  })
  @post("{id}")
  static createDwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
