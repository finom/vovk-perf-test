import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ael")
export default class AelController {
  @operation({
    summary: "Get Ael",
  })
  @get()
  static getAel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ael",
  })
  @post("{id}")
  static createAel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
