import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbe")
export default class LbeController {
  @operation({
    summary: "Get Lbe",
  })
  @get()
  static getLbe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbe",
  })
  @post("{id}")
  static createLbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
