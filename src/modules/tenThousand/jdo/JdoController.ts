import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdo")
export default class JdoController {
  @operation({
    summary: "Get Jdo",
  })
  @get()
  static getJdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdo",
  })
  @post("{id}")
  static createJdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
