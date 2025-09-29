import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jris")
export default class JriController {
  @operation({
    summary: "Get Jris",
  })
  @get()
  static getJris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jri",
  })
  @post("{id}")
  static createJri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
