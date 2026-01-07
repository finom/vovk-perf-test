import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnf")
export default class FnfController {
  @operation({
    summary: "Get Fnf",
  })
  @get()
  static getFnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnf",
  })
  @post("{id}")
  static createFnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
