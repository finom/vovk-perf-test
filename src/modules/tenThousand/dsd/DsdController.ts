import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsds")
export default class DsdController {
  @operation({
    summary: "Get Dsds",
  })
  @get()
  static getDsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsd",
  })
  @post("{id}")
  static createDsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
