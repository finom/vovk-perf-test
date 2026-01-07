import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ate")
export default class AteController {
  @operation({
    summary: "Get Ate",
  })
  @get()
  static getAte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ate",
  })
  @post("{id}")
  static createAte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
