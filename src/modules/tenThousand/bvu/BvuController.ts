import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvu")
export default class BvuController {
  @operation({
    summary: "Get Bvu",
  })
  @get()
  static getBvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvu",
  })
  @post("{id}")
  static createBvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
