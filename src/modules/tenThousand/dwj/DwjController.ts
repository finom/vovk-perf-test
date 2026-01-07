import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwj")
export default class DwjController {
  @operation({
    summary: "Get Dwj",
  })
  @get()
  static getDwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwj",
  })
  @post("{id}")
  static createDwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
