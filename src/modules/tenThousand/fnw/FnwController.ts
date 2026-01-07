import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnw")
export default class FnwController {
  @operation({
    summary: "Get Fnw",
  })
  @get()
  static getFnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnw",
  })
  @post("{id}")
  static createFnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
