import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evj")
export default class EvjController {
  @operation({
    summary: "Get Evj",
  })
  @get()
  static getEvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evj",
  })
  @post("{id}")
  static createEvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
