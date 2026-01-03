import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwqs")
export default class DwqController {
  @operation({
    summary: "Get Dwqs",
  })
  @get()
  static getDwqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwq",
  })
  @post("{id}")
  static createDwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
