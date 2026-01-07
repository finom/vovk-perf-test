import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erl")
export default class ErlController {
  @operation({
    summary: "Get Erl",
  })
  @get()
  static getErl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erl",
  })
  @post("{id}")
  static createErl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
