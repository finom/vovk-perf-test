import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("migs")
export default class MigController {
  @operation({
    summary: "Get Migs",
  })
  @get()
  static getMigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mig",
  })
  @post("{id}")
  static createMig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
