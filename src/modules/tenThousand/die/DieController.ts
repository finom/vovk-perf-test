import { procedure, prefix, get, post, operation } from "vovk";

@prefix("die")
export default class DieController {
  @operation({
    summary: "Get Die",
  })
  @get()
  static getDie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Die",
  })
  @post("{id}")
  static createDie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
