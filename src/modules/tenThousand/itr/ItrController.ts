import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itrs")
export default class ItrController {
  @operation({
    summary: "Get Itrs",
  })
  @get()
  static getItrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itr",
  })
  @post("{id}")
  static createItr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
