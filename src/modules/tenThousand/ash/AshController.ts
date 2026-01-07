import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ash")
export default class AshController {
  @operation({
    summary: "Get Ash",
  })
  @get()
  static getAsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ash",
  })
  @post("{id}")
  static createAsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
