import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("excs")
export default class ExcController {
  @operation({
    summary: "Get Excs",
  })
  @get()
  static getExcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exc",
  })
  @post("{id}")
  static createExc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
