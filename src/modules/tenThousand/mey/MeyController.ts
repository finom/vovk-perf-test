import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meys")
export default class MeyController {
  @operation({
    summary: "Get Meys",
  })
  @get()
  static getMeys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mey",
  })
  @post("{id}")
  static createMey = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
