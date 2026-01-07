import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aut")
export default class AutController {
  @operation({
    summary: "Get Aut",
  })
  @get()
  static getAut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aut",
  })
  @post("{id}")
  static createAut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
