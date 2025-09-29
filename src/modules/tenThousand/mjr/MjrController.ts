import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjrs")
export default class MjrController {
  @operation({
    summary: "Get Mjrs",
  })
  @get()
  static getMjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjr",
  })
  @post("{id}")
  static createMjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
