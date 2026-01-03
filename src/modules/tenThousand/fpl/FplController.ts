import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpls")
export default class FplController {
  @operation({
    summary: "Get Fpls",
  })
  @get()
  static getFpls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpl",
  })
  @post("{id}")
  static createFpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
