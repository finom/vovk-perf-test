import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jahs")
export default class JahController {
  @operation({
    summary: "Get Jahs",
  })
  @get()
  static getJahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jah",
  })
  @post("{id}")
  static createJah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
