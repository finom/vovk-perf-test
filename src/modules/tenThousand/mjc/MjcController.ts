import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjcs")
export default class MjcController {
  @operation({
    summary: "Get Mjcs",
  })
  @get()
  static getMjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjc",
  })
  @post("{id}")
  static createMjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
