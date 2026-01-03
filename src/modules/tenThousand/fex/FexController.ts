import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fexes")
export default class FexController {
  @operation({
    summary: "Get Fexes",
  })
  @get()
  static getFexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fex",
  })
  @post("{id}")
  static createFex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
