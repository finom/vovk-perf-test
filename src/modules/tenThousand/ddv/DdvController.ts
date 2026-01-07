import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddv")
export default class DdvController {
  @operation({
    summary: "Get Ddv",
  })
  @get()
  static getDdv = procedure({
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
