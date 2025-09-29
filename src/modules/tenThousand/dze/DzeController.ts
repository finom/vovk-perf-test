import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzes")
export default class DzeController {
  @operation({
    summary: "Get Dzes",
  })
  @get()
  static getDzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dze",
  })
  @post("{id}")
  static createDze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
