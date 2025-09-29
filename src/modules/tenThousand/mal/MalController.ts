import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mals")
export default class MalController {
  @operation({
    summary: "Get Mals",
  })
  @get()
  static getMals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mal",
  })
  @post("{id}")
  static createMal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
