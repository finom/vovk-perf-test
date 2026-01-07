import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqo")
export default class HqoController {
  @operation({
    summary: "Get Hqo",
  })
  @get()
  static getHqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqo",
  })
  @post("{id}")
  static createHqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
