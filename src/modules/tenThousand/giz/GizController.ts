import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giz")
export default class GizController {
  @operation({
    summary: "Get Giz",
  })
  @get()
  static getGiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giz",
  })
  @post("{id}")
  static createGiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
