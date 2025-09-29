import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cubs")
export default class CubController {
  @operation({
    summary: "Get Cubs",
  })
  @get()
  static getCubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cub",
  })
  @post("{id}")
  static createCub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
