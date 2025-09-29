import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("des")
export default class DesController {
  @operation({
    summary: "Get Des",
  })
  @get()
  static getDes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Des",
  })
  @post("{id}")
  static createDes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
