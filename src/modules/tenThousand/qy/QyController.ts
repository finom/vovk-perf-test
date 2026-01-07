import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qy")
export default class QyController {
  @operation({
    summary: "Get Qy",
  })
  @get()
  static getQy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qy",
  })
  @post("{id}")
  static createQy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
