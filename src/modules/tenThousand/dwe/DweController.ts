import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwe")
export default class DweController {
  @operation({
    summary: "Get Dwe",
  })
  @get()
  static getDwe = procedure({
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
