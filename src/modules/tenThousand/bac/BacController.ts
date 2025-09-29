import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bacs")
export default class BacController {
  @operation({
    summary: "Get Bacs",
  })
  @get()
  static getBacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bac",
  })
  @post("{id}")
  static createBac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
