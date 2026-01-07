import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jch")
export default class JchController {
  @operation({
    summary: "Get Jch",
  })
  @get()
  static getJch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jch",
  })
  @post("{id}")
  static createJch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
