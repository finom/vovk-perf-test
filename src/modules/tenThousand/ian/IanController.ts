import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ian")
export default class IanController {
  @operation({
    summary: "Get Ian",
  })
  @get()
  static getIan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ian",
  })
  @post("{id}")
  static createIan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
