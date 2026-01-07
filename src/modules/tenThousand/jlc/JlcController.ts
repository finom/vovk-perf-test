import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlc")
export default class JlcController {
  @operation({
    summary: "Get Jlc",
  })
  @get()
  static getJlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlc",
  })
  @post("{id}")
  static createJlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
