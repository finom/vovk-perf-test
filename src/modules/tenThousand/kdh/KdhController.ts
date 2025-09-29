import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdhs")
export default class KdhController {
  @operation({
    summary: "Get Kdhs",
  })
  @get()
  static getKdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdh",
  })
  @post("{id}")
  static createKdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
