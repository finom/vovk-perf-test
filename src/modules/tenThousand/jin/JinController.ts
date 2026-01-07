import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jin")
export default class JinController {
  @operation({
    summary: "Get Jin",
  })
  @get()
  static getJin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jin",
  })
  @post("{id}")
  static createJin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
