import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fol")
export default class FolController {
  @operation({
    summary: "Get Fol",
  })
  @get()
  static getFol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fol",
  })
  @post("{id}")
  static createFol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
