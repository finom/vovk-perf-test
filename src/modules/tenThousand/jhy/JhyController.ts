import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhy")
export default class JhyController {
  @operation({
    summary: "Get Jhy",
  })
  @get()
  static getJhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhy",
  })
  @post("{id}")
  static createJhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
