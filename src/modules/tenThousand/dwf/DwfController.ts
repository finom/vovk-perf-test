import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwfs")
export default class DwfController {
  @operation({
    summary: "Get Dwfs",
  })
  @get()
  static getDwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwf",
  })
  @post("{id}")
  static createDwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
