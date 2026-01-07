import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ati")
export default class AtiController {
  @operation({
    summary: "Get Ati",
  })
  @get()
  static getAti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ati",
  })
  @post("{id}")
  static createAti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
