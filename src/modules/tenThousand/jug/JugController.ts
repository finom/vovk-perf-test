import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jugs")
export default class JugController {
  @operation({
    summary: "Get Jugs",
  })
  @get()
  static getJugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jug",
  })
  @post("{id}")
  static createJug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
