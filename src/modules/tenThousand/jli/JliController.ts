import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlis")
export default class JliController {
  @operation({
    summary: "Get Jlis",
  })
  @get()
  static getJlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jli",
  })
  @post("{id}")
  static createJli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
