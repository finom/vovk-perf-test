import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjxes")
export default class FjxController {
  @operation({
    summary: "Get Fjxes",
  })
  @get()
  static getFjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjx",
  })
  @post("{id}")
  static createFjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
