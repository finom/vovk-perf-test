import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agfs")
export default class AgfController {
  @operation({
    summary: "Get Agfs",
  })
  @get()
  static getAgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agf",
  })
  @post("{id}")
  static createAgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
