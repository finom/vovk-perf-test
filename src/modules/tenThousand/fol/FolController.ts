import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fols")
export default class FolController {
  @operation({
    summary: "Get Fols",
  })
  @get()
  static getFols = procedure({
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
