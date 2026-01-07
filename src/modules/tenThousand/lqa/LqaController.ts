import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqa")
export default class LqaController {
  @operation({
    summary: "Get Lqa",
  })
  @get()
  static getLqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqa",
  })
  @post("{id}")
  static createLqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
