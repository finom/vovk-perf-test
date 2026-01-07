import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiz")
export default class HizController {
  @operation({
    summary: "Get Hiz",
  })
  @get()
  static getHiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiz",
  })
  @post("{id}")
  static createHiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
