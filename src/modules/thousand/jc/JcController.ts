import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jc")
export default class JcController {
  @operation({
    summary: "Get Jc",
  })
  @get()
  static getJc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jc",
  })
  @post("{id}")
  static createJc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
