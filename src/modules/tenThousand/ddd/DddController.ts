import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddd")
export default class DddController {
  @operation({
    summary: "Get Ddd",
  })
  @get()
  static getDdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddd",
  })
  @post("{id}")
  static createDdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
