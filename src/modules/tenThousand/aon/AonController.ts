import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aon")
export default class AonController {
  @operation({
    summary: "Get Aon",
  })
  @get()
  static getAon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aon",
  })
  @post("{id}")
  static createAon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
