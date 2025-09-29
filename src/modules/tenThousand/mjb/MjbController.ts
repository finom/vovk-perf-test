import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjbs")
export default class MjbController {
  @operation({
    summary: "Get Mjbs",
  })
  @get()
  static getMjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjb",
  })
  @post("{id}")
  static createMjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
