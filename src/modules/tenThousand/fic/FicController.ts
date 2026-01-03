import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fics")
export default class FicController {
  @operation({
    summary: "Get Fics",
  })
  @get()
  static getFics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fic",
  })
  @post("{id}")
  static createFic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
