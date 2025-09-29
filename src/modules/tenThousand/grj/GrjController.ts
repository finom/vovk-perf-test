import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grjs")
export default class GrjController {
  @operation({
    summary: "Get Grjs",
  })
  @get()
  static getGrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grj",
  })
  @post("{id}")
  static createGrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
