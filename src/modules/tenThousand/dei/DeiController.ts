import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dei")
export default class DeiController {
  @operation({
    summary: "Get Dei",
  })
  @get()
  static getDei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dei",
  })
  @post("{id}")
  static createDei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
