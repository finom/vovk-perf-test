import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwrs")
export default class DwrController {
  @operation({
    summary: "Get Dwrs",
  })
  @get()
  static getDwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwr",
  })
  @post("{id}")
  static createDwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
