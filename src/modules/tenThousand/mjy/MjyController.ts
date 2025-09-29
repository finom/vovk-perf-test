import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjies")
export default class MjyController {
  @operation({
    summary: "Get Mjies",
  })
  @get()
  static getMjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjy",
  })
  @post("{id}")
  static createMjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
