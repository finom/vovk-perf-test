import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnr")
export default class FnrController {
  @operation({
    summary: "Get Fnr",
  })
  @get()
  static getFnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnr",
  })
  @post("{id}")
  static createFnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
