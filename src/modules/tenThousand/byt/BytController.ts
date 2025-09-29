import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byts")
export default class BytController {
  @operation({
    summary: "Get Byts",
  })
  @get()
  static getByts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byt",
  })
  @post("{id}")
  static createByt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
