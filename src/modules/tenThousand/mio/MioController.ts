import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mios")
export default class MioController {
  @operation({
    summary: "Get Mios",
  })
  @get()
  static getMios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mio",
  })
  @post("{id}")
  static createMio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
