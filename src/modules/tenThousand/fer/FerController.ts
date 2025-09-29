import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fers")
export default class FerController {
  @operation({
    summary: "Get Fers",
  })
  @get()
  static getFers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fer",
  })
  @post("{id}")
  static createFer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
