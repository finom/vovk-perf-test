import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ts")
export default class TsController {
  @operation({
    summary: "Get Ts",
  })
  @get()
  static getTs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ts",
  })
  @post("{id}")
  static createTs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
