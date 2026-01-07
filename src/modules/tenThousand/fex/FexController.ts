import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fex")
export default class FexController {
  @operation({
    summary: "Get Fex",
  })
  @get()
  static getFex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fex",
  })
  @post("{id}")
  static createFex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
