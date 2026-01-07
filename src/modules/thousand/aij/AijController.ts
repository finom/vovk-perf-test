import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aij")
export default class AijController {
  @operation({
    summary: "Get Aij",
  })
  @get()
  static getAij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aij",
  })
  @post("{id}")
  static createAij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
