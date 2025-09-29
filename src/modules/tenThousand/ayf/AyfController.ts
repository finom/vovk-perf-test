import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayfs")
export default class AyfController {
  @operation({
    summary: "Get Ayfs",
  })
  @get()
  static getAyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayf",
  })
  @post("{id}")
  static createAyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
