import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ty")
export default class TyController {
  @operation({
    summary: "Get Ty",
  })
  @get()
  static getTy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ty",
  })
  @post("{id}")
  static createTy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
