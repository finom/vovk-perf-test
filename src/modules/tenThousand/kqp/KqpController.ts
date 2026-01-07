import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqp")
export default class KqpController {
  @operation({
    summary: "Get Kqp",
  })
  @get()
  static getKqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqp",
  })
  @post("{id}")
  static createKqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
