import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyv")
export default class JyvController {
  @operation({
    summary: "Get Jyv",
  })
  @get()
  static getJyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyv",
  })
  @post("{id}")
  static createJyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
