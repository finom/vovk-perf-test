import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsi")
export default class BsiController {
  @operation({
    summary: "Get Bsi",
  })
  @get()
  static getBsi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsi",
  })
  @post("{id}")
  static createBsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
