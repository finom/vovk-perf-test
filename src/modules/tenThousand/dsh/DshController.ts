import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsh")
export default class DshController {
  @operation({
    summary: "Get Dsh",
  })
  @get()
  static getDsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsh",
  })
  @post("{id}")
  static createDsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
