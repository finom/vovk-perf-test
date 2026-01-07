import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmq")
export default class JmqController {
  @operation({
    summary: "Get Jmq",
  })
  @get()
  static getJmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmq",
  })
  @post("{id}")
  static createJmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
