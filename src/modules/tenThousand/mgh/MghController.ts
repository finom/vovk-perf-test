import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mghs")
export default class MghController {
  @operation({
    summary: "Get Mghs",
  })
  @get()
  static getMghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgh",
  })
  @post("{id}")
  static createMgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
