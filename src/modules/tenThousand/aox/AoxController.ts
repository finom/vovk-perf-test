import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aox")
export default class AoxController {
  @operation({
    summary: "Get Aox",
  })
  @get()
  static getAox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aox",
  })
  @post("{id}")
  static createAox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
