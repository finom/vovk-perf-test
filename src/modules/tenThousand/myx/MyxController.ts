import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myxes")
export default class MyxController {
  @operation({
    summary: "Get Myxes",
  })
  @get()
  static getMyxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myx",
  })
  @post("{id}")
  static createMyx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
