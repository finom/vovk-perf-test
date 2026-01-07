import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrq")
export default class JrqController {
  @operation({
    summary: "Get Jrq",
  })
  @get()
  static getJrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrq",
  })
  @post("{id}")
  static createJrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
