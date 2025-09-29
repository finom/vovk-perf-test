import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mocs")
export default class MocController {
  @operation({
    summary: "Get Mocs",
  })
  @get()
  static getMocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moc",
  })
  @post("{id}")
  static createMoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
