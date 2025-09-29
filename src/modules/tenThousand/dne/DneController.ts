import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnes")
export default class DneController {
  @operation({
    summary: "Get Dnes",
  })
  @get()
  static getDnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dne",
  })
  @post("{id}")
  static createDne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
