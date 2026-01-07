import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bj")
export default class BjController {
  @operation({
    summary: "Get Bj",
  })
  @get()
  static getBj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bj",
  })
  @post("{id}")
  static createBj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
