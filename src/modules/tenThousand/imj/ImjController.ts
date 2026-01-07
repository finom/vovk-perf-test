import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imj")
export default class ImjController {
  @operation({
    summary: "Get Imj",
  })
  @get()
  static getImj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imj",
  })
  @post("{id}")
  static createImj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
