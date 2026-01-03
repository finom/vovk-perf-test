import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddts")
export default class DdtController {
  @operation({
    summary: "Get Ddts",
  })
  @get()
  static getDdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddt",
  })
  @post("{id}")
  static createDdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
