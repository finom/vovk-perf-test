import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kybs")
export default class KybController {
  @operation({
    summary: "Get Kybs",
  })
  @get()
  static getKybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyb",
  })
  @post("{id}")
  static createKyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
