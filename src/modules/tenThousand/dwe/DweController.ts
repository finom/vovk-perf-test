import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwes")
export default class DweController {
  @operation({
    summary: "Get Dwes",
  })
  @get()
  static getDwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwe",
  })
  @post("{id}")
  static createDwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
