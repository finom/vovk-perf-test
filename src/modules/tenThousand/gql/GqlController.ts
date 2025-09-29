import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqls")
export default class GqlController {
  @operation({
    summary: "Get Gqls",
  })
  @get()
  static getGqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gql",
  })
  @post("{id}")
  static createGql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
