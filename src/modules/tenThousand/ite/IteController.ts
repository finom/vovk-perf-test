import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ite")
export default class IteController {
  @operation({
    summary: "Get Ite",
  })
  @get()
  static getIte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ite",
  })
  @post("{id}")
  static createIte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
