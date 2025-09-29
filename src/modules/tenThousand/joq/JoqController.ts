import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("joqs")
export default class JoqController {
  @operation({
    summary: "Get Joqs",
  })
  @get()
  static getJoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joq",
  })
  @post("{id}")
  static createJoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
