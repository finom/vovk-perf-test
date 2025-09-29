import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaus")
export default class JauController {
  @operation({
    summary: "Get Jaus",
  })
  @get()
  static getJaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jau",
  })
  @post("{id}")
  static createJau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
