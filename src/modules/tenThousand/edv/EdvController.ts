import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edvs")
export default class EdvController {
  @operation({
    summary: "Get Edvs",
  })
  @get()
  static getEdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edv",
  })
  @post("{id}")
  static createEdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
