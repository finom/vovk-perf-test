import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msls")
export default class MslController {
  @operation({
    summary: "Get Msls",
  })
  @get()
  static getMsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msl",
  })
  @post("{id}")
  static createMsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
