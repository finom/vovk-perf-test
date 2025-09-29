import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nacs")
export default class NacController {
  @operation({
    summary: "Get Nacs",
  })
  @get()
  static getNacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nac",
  })
  @post("{id}")
  static createNac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
