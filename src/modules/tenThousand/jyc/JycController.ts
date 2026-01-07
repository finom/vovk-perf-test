import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyc")
export default class JycController {
  @operation({
    summary: "Get Jyc",
  })
  @get()
  static getJyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyc",
  })
  @post("{id}")
  static createJyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
