import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbs")
export default class NbsController {
  @operation({
    summary: "Get Nbs",
  })
  @get()
  static getNbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbs",
  })
  @post("{id}")
  static createNbs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
