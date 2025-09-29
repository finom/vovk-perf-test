import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fris")
export default class FriController {
  @operation({
    summary: "Get Fris",
  })
  @get()
  static getFris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fri",
  })
  @post("{id}")
  static createFri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
