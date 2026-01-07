import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aba")
export default class AbaController {
  @operation({
    summary: "Get Aba",
  })
  @get()
  static getAba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aba",
  })
  @post("{id}")
  static createAba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
