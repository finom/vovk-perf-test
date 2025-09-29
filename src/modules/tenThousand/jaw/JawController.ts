import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaws")
export default class JawController {
  @operation({
    summary: "Get Jaws",
  })
  @get()
  static getJaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jaw",
  })
  @post("{id}")
  static createJaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
