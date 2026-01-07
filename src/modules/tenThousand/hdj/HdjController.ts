import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdj")
export default class HdjController {
  @operation({
    summary: "Get Hdj",
  })
  @get()
  static getHdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdj",
  })
  @post("{id}")
  static createHdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
