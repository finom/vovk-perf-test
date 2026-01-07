import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hur")
export default class HurController {
  @operation({
    summary: "Get Hur",
  })
  @get()
  static getHur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hur",
  })
  @post("{id}")
  static createHur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
