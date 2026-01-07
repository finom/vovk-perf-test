import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mof")
export default class MofController {
  @operation({
    summary: "Get Mof",
  })
  @get()
  static getMof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mof",
  })
  @post("{id}")
  static createMof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
