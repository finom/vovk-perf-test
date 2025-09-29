import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dags")
export default class DagController {
  @operation({
    summary: "Get Dags",
  })
  @get()
  static getDags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dag",
  })
  @post("{id}")
  static createDag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
