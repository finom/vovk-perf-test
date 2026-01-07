import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqp")
export default class AqpController {
  @operation({
    summary: "Get Aqp",
  })
  @get()
  static getAqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqp",
  })
  @post("{id}")
  static createAqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
