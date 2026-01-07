import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqp")
export default class IqpController {
  @operation({
    summary: "Get Iqp",
  })
  @get()
  static getIqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqp",
  })
  @post("{id}")
  static createIqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
