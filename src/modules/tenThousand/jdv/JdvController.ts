import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdv")
export default class JdvController {
  @operation({
    summary: "Get Jdv",
  })
  @get()
  static getJdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdv",
  })
  @post("{id}")
  static createJdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
