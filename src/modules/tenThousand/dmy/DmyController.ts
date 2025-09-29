import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmies")
export default class DmyController {
  @operation({
    summary: "Get Dmies",
  })
  @get()
  static getDmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmy",
  })
  @post("{id}")
  static createDmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
