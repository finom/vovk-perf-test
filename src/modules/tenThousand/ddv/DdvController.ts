import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddvs")
export default class DdvController {
  @operation({
    summary: "Get Ddvs",
  })
  @get()
  static getDdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddv",
  })
  @post("{id}")
  static createDdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
