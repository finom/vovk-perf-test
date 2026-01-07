import { procedure, prefix, get, post, operation } from "vovk";

@prefix("het")
export default class HetController {
  @operation({
    summary: "Get Het",
  })
  @get()
  static getHet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Het",
  })
  @post("{id}")
  static createHet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
