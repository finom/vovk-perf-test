import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dww")
export default class DwwController {
  @operation({
    summary: "Get Dww",
  })
  @get()
  static getDww = procedure({
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
