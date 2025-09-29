import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtus")
export default class DtuController {
  @operation({
    summary: "Get Dtus",
  })
  @get()
  static getDtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtu",
  })
  @post("{id}")
  static createDtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
