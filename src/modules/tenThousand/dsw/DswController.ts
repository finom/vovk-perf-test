import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsws")
export default class DswController {
  @operation({
    summary: "Get Dsws",
  })
  @get()
  static getDsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsw",
  })
  @post("{id}")
  static createDsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
