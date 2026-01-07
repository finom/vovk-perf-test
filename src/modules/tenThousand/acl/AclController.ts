import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acl")
export default class AclController {
  @operation({
    summary: "Get Acl",
  })
  @get()
  static getAcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acl",
  })
  @post("{id}")
  static createAcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
