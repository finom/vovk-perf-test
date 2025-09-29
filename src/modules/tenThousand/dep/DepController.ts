import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deps")
export default class DepController {
  @operation({
    summary: "Get Deps",
  })
  @get()
  static getDeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dep",
  })
  @post("{id}")
  static createDep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
