import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqes")
export default class AqeController {
  @operation({
    summary: "Get Aqes",
  })
  @get()
  static getAqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqe",
  })
  @post("{id}")
  static createAqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
