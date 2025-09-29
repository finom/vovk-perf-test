import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjps")
export default class FjpController {
  @operation({
    summary: "Get Fjps",
  })
  @get()
  static getFjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjp",
  })
  @post("{id}")
  static createFjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
