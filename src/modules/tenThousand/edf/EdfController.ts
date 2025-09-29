import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edfs")
export default class EdfController {
  @operation({
    summary: "Get Edfs",
  })
  @get()
  static getEdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edf",
  })
  @post("{id}")
  static createEdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
