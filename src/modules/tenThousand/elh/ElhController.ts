import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elh")
export default class ElhController {
  @operation({
    summary: "Get Elh",
  })
  @get()
  static getElh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elh",
  })
  @post("{id}")
  static createElh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
