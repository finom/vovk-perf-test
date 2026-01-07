import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iao")
export default class IaoController {
  @operation({
    summary: "Get Iao",
  })
  @get()
  static getIao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iao",
  })
  @post("{id}")
  static createIao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
