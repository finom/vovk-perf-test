import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgies")
export default class CgyController {
  @operation({
    summary: "Get Cgies",
  })
  @get()
  static getCgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgy",
  })
  @post("{id}")
  static createCgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
