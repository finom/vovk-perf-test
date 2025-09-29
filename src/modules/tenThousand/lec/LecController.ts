import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lecs")
export default class LecController {
  @operation({
    summary: "Get Lecs",
  })
  @get()
  static getLecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lec",
  })
  @post("{id}")
  static createLec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
