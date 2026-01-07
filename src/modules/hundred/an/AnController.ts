import { procedure, prefix, get, post, operation } from "vovk";

@prefix("an")
export default class AnController {
  @operation({
    summary: "Get An",
  })
  @get()
  static getAn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create An",
  })
  @post("{id}")
  static createAn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
