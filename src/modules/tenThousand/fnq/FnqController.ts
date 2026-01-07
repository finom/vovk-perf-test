import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnq")
export default class FnqController {
  @operation({
    summary: "Get Fnq",
  })
  @get()
  static getFnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnq",
  })
  @post("{id}")
  static createFnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
