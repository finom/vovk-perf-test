import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhts")
export default class NhtController {
  @operation({
    summary: "Get Nhts",
  })
  @get()
  static getNhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nht",
  })
  @post("{id}")
  static createNht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
