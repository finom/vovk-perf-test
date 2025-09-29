import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhxes")
export default class BhxController {
  @operation({
    summary: "Get Bhxes",
  })
  @get()
  static getBhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhx",
  })
  @post("{id}")
  static createBhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
