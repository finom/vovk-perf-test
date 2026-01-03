import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuis")
export default class FuiController {
  @operation({
    summary: "Get Fuis",
  })
  @get()
  static getFuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fui",
  })
  @post("{id}")
  static createFui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
