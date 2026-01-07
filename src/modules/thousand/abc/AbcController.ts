import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abc")
export default class AbcController {
  @operation({
    summary: "Get Abc",
  })
  @get()
  static getAbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abc",
  })
  @post("{id}")
  static createAbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
