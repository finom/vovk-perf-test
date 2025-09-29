import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axhs")
export default class AxhController {
  @operation({
    summary: "Get Axhs",
  })
  @get()
  static getAxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axh",
  })
  @post("{id}")
  static createAxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
