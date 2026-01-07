import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isg")
export default class IsgController {
  @operation({
    summary: "Get Isg",
  })
  @get()
  static getIsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isg",
  })
  @post("{id}")
  static createIsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
