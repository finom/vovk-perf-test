import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eev")
export default class EevController {
  @operation({
    summary: "Get Eev",
  })
  @get()
  static getEev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eev",
  })
  @post("{id}")
  static createEev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
