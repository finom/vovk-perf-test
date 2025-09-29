import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myms")
export default class MymController {
  @operation({
    summary: "Get Myms",
  })
  @get()
  static getMyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mym",
  })
  @post("{id}")
  static createMym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
