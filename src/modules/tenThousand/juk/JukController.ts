import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juk")
export default class JukController {
  @operation({
    summary: "Get Juk",
  })
  @get()
  static getJuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juk",
  })
  @post("{id}")
  static createJuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
