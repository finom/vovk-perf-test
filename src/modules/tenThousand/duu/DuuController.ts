import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duu")
export default class DuuController {
  @operation({
    summary: "Get Duu",
  })
  @get()
  static getDuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duu",
  })
  @post("{id}")
  static createDuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
