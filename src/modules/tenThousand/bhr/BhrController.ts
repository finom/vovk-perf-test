import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhrs")
export default class BhrController {
  @operation({
    summary: "Get Bhrs",
  })
  @get()
  static getBhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bhr",
  })
  @post("{id}")
  static createBhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
