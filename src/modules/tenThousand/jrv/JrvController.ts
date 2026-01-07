import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrv")
export default class JrvController {
  @operation({
    summary: "Get Jrv",
  })
  @get()
  static getJrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrv",
  })
  @post("{id}")
  static createJrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
