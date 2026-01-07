import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqo")
export default class AqoController {
  @operation({
    summary: "Get Aqo",
  })
  @get()
  static getAqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqo",
  })
  @post("{id}")
  static createAqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
