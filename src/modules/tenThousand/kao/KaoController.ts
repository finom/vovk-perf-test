import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kao")
export default class KaoController {
  @operation({
    summary: "Get Kao",
  })
  @get()
  static getKao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kao",
  })
  @post("{id}")
  static createKao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
