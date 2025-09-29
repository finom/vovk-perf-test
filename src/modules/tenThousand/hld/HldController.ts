import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlds")
export default class HldController {
  @operation({
    summary: "Get Hlds",
  })
  @get()
  static getHlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hld",
  })
  @post("{id}")
  static createHld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
