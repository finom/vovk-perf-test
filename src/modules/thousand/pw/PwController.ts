import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pw")
export default class PwController {
  @operation({
    summary: "Get Pw",
  })
  @get()
  static getPw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pw",
  })
  @post("{id}")
  static createPw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
