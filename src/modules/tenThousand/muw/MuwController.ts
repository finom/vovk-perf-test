import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muw")
export default class MuwController {
  @operation({
    summary: "Get Muw",
  })
  @get()
  static getMuw = procedure({
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
