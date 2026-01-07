import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlj")
export default class JljController {
  @operation({
    summary: "Get Jlj",
  })
  @get()
  static getJlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlj",
  })
  @post("{id}")
  static createJlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
