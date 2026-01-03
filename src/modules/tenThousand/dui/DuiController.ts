import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duis")
export default class DuiController {
  @operation({
    summary: "Get Duis",
  })
  @get()
  static getDuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dui",
  })
  @post("{id}")
  static createDui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
