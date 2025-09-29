import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mejs")
export default class MejController {
  @operation({
    summary: "Get Mejs",
  })
  @get()
  static getMejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mej",
  })
  @post("{id}")
  static createMej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
