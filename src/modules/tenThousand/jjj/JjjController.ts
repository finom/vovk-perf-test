import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjj")
export default class JjjController {
  @operation({
    summary: "Get Jjj",
  })
  @get()
  static getJjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjj",
  })
  @post("{id}")
  static createJjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
