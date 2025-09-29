import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjgs")
export default class FjgController {
  @operation({
    summary: "Get Fjgs",
  })
  @get()
  static getFjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjg",
  })
  @post("{id}")
  static createFjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
