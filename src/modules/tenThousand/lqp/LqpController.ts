import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqp")
export default class LqpController {
  @operation({
    summary: "Get Lqp",
  })
  @get()
  static getLqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqp",
  })
  @post("{id}")
  static createLqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
