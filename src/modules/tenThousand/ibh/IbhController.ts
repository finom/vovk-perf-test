import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibhs")
export default class IbhController {
  @operation({
    summary: "Get Ibhs",
  })
  @get()
  static getIbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibh",
  })
  @post("{id}")
  static createIbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
