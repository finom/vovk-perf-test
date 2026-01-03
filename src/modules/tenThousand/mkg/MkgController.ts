import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkgs")
export default class MkgController {
  @operation({
    summary: "Get Mkgs",
  })
  @get()
  static getMkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkg",
  })
  @post("{id}")
  static createMkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
