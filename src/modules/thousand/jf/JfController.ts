import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jf")
export default class JfController {
  @operation({
    summary: "Get Jf",
  })
  @get()
  static getJf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jf",
  })
  @post("{id}")
  static createJf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
