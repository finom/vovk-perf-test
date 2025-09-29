import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fejs")
export default class FejController {
  @operation({
    summary: "Get Fejs",
  })
  @get()
  static getFejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fej",
  })
  @post("{id}")
  static createFej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
