import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqa")
export default class DqaController {
  @operation({
    summary: "Get Dqa",
  })
  @get()
  static getDqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqa",
  })
  @post("{id}")
  static createDqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
