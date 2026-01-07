import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiz")
export default class IizController {
  @operation({
    summary: "Get Iiz",
  })
  @get()
  static getIiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiz",
  })
  @post("{id}")
  static createIiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
