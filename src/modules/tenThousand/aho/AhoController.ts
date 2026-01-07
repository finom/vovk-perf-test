import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aho")
export default class AhoController {
  @operation({
    summary: "Get Aho",
  })
  @get()
  static getAho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aho",
  })
  @post("{id}")
  static createAho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
