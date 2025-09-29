import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkgs")
export default class MkgController {
  @operation({
    summary: "Get Mkgs",
  })
  @get()
  static getMkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkg",
  })
  @post("{id}")
  static createMkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
