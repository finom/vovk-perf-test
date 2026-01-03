import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwws")
export default class DwwController {
  @operation({
    summary: "Get Dwws",
  })
  @get()
  static getDwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dww",
  })
  @post("{id}")
  static createDww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
