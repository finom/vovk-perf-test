import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asses")
export default class AssController {
  @operation({
    summary: "Get Asses",
  })
  @get()
  static getAsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ass",
  })
  @post("{id}")
  static createAss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
