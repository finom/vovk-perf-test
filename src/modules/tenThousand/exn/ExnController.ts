import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exns")
export default class ExnController {
  @operation({
    summary: "Get Exns",
  })
  @get()
  static getExns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exn",
  })
  @post("{id}")
  static createExn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
