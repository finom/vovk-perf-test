import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezy")
export default class EzyController {
  @operation({
    summary: "Get Ezy",
  })
  @get()
  static getEzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezy",
  })
  @post("{id}")
  static createEzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
