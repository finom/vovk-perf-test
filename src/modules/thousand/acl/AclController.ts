import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acl")
export default class AclController {
  @operation({
    summary: "Get Acl",
  })
  @get()
  static getAcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acl",
  })
  @post("{id}")
  static createAcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
