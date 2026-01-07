import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myy")
export default class MyyController {
  @operation({
    summary: "Get Myy",
  })
  @get()
  static getMyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myy",
  })
  @post("{id}")
  static createMyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
