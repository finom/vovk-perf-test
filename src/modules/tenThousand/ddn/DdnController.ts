import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddn")
export default class DdnController {
  @operation({
    summary: "Get Ddn",
  })
  @get()
  static getDdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddn",
  })
  @post("{id}")
  static createDdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
