import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnos")
export default class DnoController {
  @operation({
    summary: "Get Dnos",
  })
  @get()
  static getDnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dno",
  })
  @post("{id}")
  static createDno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
