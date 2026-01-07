import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esy")
export default class EsyController {
  @operation({
    summary: "Get Esy",
  })
  @get()
  static getEsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esy",
  })
  @post("{id}")
  static createEsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
