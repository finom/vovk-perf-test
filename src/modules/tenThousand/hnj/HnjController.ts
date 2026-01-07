import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnj")
export default class HnjController {
  @operation({
    summary: "Get Hnj",
  })
  @get()
  static getHnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnj",
  })
  @post("{id}")
  static createHnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
