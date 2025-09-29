import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iols")
export default class IolController {
  @operation({
    summary: "Get Iols",
  })
  @get()
  static getIols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iol",
  })
  @post("{id}")
  static createIol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
