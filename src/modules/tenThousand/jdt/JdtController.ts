import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdt")
export default class JdtController {
  @operation({
    summary: "Get Jdt",
  })
  @get()
  static getJdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdt",
  })
  @post("{id}")
  static createJdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
