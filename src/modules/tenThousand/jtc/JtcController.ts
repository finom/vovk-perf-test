import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtc")
export default class JtcController {
  @operation({
    summary: "Get Jtc",
  })
  @get()
  static getJtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtc",
  })
  @post("{id}")
  static createJtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
