import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzu")
export default class GzuController {
  @operation({
    summary: "Get Gzu",
  })
  @get()
  static getGzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzu",
  })
  @post("{id}")
  static createGzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
