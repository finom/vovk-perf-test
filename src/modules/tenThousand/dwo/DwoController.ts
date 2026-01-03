import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwos")
export default class DwoController {
  @operation({
    summary: "Get Dwos",
  })
  @get()
  static getDwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwo",
  })
  @post("{id}")
  static createDwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
