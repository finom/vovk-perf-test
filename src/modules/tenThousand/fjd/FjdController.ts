import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjds")
export default class FjdController {
  @operation({
    summary: "Get Fjds",
  })
  @get()
  static getFjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjd",
  })
  @post("{id}")
  static createFjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
