import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnk")
export default class FnkController {
  @operation({
    summary: "Get Fnk",
  })
  @get()
  static getFnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnk",
  })
  @post("{id}")
  static createFnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
