import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acls")
export default class AclController {
  @operation({
    summary: "Get Acls",
  })
  @get()
  static getAcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Acl",
  })
  @post("{id}")
  static createAcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
