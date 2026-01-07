import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiz")
export default class AizController {
  @operation({
    summary: "Get Aiz",
  })
  @get()
  static getAiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiz",
  })
  @post("{id}")
  static createAiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
