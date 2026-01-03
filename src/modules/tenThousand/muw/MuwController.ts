import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muws")
export default class MuwController {
  @operation({
    summary: "Get Muws",
  })
  @get()
  static getMuws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muw",
  })
  @post("{id}")
  static createMuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
