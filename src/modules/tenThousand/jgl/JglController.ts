import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgl")
export default class JglController {
  @operation({
    summary: "Get Jgl",
  })
  @get()
  static getJgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgl",
  })
  @post("{id}")
  static createJgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
