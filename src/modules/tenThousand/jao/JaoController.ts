import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jao")
export default class JaoController {
  @operation({
    summary: "Get Jao",
  })
  @get()
  static getJao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jao",
  })
  @post("{id}")
  static createJao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
