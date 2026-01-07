import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiu")
export default class JiuController {
  @operation({
    summary: "Get Jiu",
  })
  @get()
  static getJiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiu",
  })
  @post("{id}")
  static createJiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
