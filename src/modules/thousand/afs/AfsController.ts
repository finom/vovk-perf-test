import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afs")
export default class AfsController {
  @operation({
    summary: "Get Afs",
  })
  @get()
  static getAfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afs",
  })
  @post("{id}")
  static createAfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
