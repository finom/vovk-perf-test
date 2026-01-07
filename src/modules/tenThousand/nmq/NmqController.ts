import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmq")
export default class NmqController {
  @operation({
    summary: "Get Nmq",
  })
  @get()
  static getNmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmq",
  })
  @post("{id}")
  static createNmq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
