import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnhs")
export default class MnhController {
  @operation({
    summary: "Get Mnhs",
  })
  @get()
  static getMnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnh",
  })
  @post("{id}")
  static createMnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
