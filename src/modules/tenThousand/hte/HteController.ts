import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hte")
export default class HteController {
  @operation({
    summary: "Get Hte",
  })
  @get()
  static getHte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hte",
  })
  @post("{id}")
  static createHte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
