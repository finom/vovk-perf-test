import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmns")
export default class DmnController {
  @operation({
    summary: "Get Dmns",
  })
  @get()
  static getDmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmn",
  })
  @post("{id}")
  static createDmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
