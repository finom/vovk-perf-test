import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwds")
export default class DwdController {
  @operation({
    summary: "Get Dwds",
  })
  @get()
  static getDwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwd",
  })
  @post("{id}")
  static createDwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
