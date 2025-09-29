import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdis")
export default class JdiController {
  @operation({
    summary: "Get Jdis",
  })
  @get()
  static getJdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdi",
  })
  @post("{id}")
  static createJdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
