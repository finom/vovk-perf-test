import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nams")
export default class NamController {
  @operation({
    summary: "Get Nams",
  })
  @get()
  static getNams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nam",
  })
  @post("{id}")
  static createNam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
