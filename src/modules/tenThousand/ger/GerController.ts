import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ger")
export default class GerController {
  @operation({
    summary: "Get Ger",
  })
  @get()
  static getGer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ger",
  })
  @post("{id}")
  static createGer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
