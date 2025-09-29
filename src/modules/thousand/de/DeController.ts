import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("des")
export default class DeController {
  @operation({
    summary: "Get Des",
  })
  @get()
  static getDes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create De",
  })
  @post("{id}")
  static createDe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
