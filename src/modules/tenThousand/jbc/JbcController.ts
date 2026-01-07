import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbc")
export default class JbcController {
  @operation({
    summary: "Get Jbc",
  })
  @get()
  static getJbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbc",
  })
  @post("{id}")
  static createJbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
