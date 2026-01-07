import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyq")
export default class JyqController {
  @operation({
    summary: "Get Jyq",
  })
  @get()
  static getJyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyq",
  })
  @post("{id}")
  static createJyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
