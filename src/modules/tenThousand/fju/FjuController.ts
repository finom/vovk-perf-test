import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjus")
export default class FjuController {
  @operation({
    summary: "Get Fjus",
  })
  @get()
  static getFjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fju",
  })
  @post("{id}")
  static createFju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
