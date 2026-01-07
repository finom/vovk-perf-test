import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnj")
export default class FnjController {
  @operation({
    summary: "Get Fnj",
  })
  @get()
  static getFnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnj",
  })
  @post("{id}")
  static createFnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
