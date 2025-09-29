import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msws")
export default class MswController {
  @operation({
    summary: "Get Msws",
  })
  @get()
  static getMsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msw",
  })
  @post("{id}")
  static createMsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
