import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("johs")
export default class JohController {
  @operation({
    summary: "Get Johs",
  })
  @get()
  static getJohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joh",
  })
  @post("{id}")
  static createJoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
