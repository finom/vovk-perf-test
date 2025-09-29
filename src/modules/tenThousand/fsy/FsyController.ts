import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsies")
export default class FsyController {
  @operation({
    summary: "Get Fsies",
  })
  @get()
  static getFsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsy",
  })
  @post("{id}")
  static createFsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
