import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcu")
export default class JcuController {
  @operation({
    summary: "Get Jcu",
  })
  @get()
  static getJcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcu",
  })
  @post("{id}")
  static createJcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
