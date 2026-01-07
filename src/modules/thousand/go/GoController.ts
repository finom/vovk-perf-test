import { procedure, prefix, get, post, operation } from "vovk";

@prefix("go")
export default class GoController {
  @operation({
    summary: "Get Go",
  })
  @get()
  static getGo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Go",
  })
  @post("{id}")
  static createGo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
