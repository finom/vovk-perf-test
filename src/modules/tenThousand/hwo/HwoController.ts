import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwo")
export default class HwoController {
  @operation({
    summary: "Get Hwo",
  })
  @get()
  static getHwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwo",
  })
  @post("{id}")
  static createHwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
