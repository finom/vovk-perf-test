import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwxes")
export default class DwxController {
  @operation({
    summary: "Get Dwxes",
  })
  @get()
  static getDwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwx",
  })
  @post("{id}")
  static createDwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
