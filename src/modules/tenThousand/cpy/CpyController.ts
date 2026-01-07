import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpy")
export default class CpyController {
  @operation({
    summary: "Get Cpy",
  })
  @get()
  static getCpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpy",
  })
  @post("{id}")
  static createCpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
