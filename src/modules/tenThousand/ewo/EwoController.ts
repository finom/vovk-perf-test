import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewo")
export default class EwoController {
  @operation({
    summary: "Get Ewo",
  })
  @get()
  static getEwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewo",
  })
  @post("{id}")
  static createEwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
