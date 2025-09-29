import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjws")
export default class MjwController {
  @operation({
    summary: "Get Mjws",
  })
  @get()
  static getMjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjw",
  })
  @post("{id}")
  static createMjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
