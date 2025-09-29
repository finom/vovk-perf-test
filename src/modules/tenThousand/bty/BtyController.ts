import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bties")
export default class BtyController {
  @operation({
    summary: "Get Bties",
  })
  @get()
  static getBties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bty",
  })
  @post("{id}")
  static createBty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
