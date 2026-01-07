import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehs")
export default class EhsController {
  @operation({
    summary: "Get Ehs",
  })
  @get()
  static getEhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehs",
  })
  @post("{id}")
  static createEhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
