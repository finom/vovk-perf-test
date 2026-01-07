import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrx")
export default class JrxController {
  @operation({
    summary: "Get Jrx",
  })
  @get()
  static getJrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrx",
  })
  @post("{id}")
  static createJrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
