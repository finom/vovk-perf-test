import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwi")
export default class DwiController {
  @operation({
    summary: "Get Dwi",
  })
  @get()
  static getDwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwi",
  })
  @post("{id}")
  static createDwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
