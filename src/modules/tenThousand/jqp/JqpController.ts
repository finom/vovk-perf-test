import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqp")
export default class JqpController {
  @operation({
    summary: "Get Jqp",
  })
  @get()
  static getJqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqp",
  })
  @post("{id}")
  static createJqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
