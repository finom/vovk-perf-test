import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hav")
export default class HavController {
  @operation({
    summary: "Get Hav",
  })
  @get()
  static getHav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hav",
  })
  @post("{id}")
  static createHav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
