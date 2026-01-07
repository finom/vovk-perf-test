import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jj")
export default class JjController {
  @operation({
    summary: "Get Jj",
  })
  @get()
  static getJj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jj",
  })
  @post("{id}")
  static createJj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
