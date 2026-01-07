import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqp")
export default class NqpController {
  @operation({
    summary: "Get Nqp",
  })
  @get()
  static getNqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqp",
  })
  @post("{id}")
  static createNqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
