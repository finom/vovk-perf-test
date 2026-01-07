import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrw")
export default class JrwController {
  @operation({
    summary: "Get Jrw",
  })
  @get()
  static getJrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrw",
  })
  @post("{id}")
  static createJrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
