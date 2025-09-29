import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deis")
export default class DeiController {
  @operation({
    summary: "Get Deis",
  })
  @get()
  static getDeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dei",
  })
  @post("{id}")
  static createDei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
