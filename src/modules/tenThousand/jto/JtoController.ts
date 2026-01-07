import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jto")
export default class JtoController {
  @operation({
    summary: "Get Jto",
  })
  @get()
  static getJto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jto",
  })
  @post("{id}")
  static createJto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
