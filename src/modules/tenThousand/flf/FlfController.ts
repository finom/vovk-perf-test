import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flves")
export default class FlfController {
  @operation({
    summary: "Get Flves",
  })
  @get()
  static getFlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flf",
  })
  @post("{id}")
  static createFlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
