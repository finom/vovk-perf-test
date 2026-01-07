import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kie")
export default class KieController {
  @operation({
    summary: "Get Kie",
  })
  @get()
  static getKie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kie",
  })
  @post("{id}")
  static createKie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
