import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikq")
export default class IkqController {
  @operation({
    summary: "Get Ikq",
  })
  @get()
  static getIkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikq",
  })
  @post("{id}")
  static createIkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
