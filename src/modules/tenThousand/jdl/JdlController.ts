import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdl")
export default class JdlController {
  @operation({
    summary: "Get Jdl",
  })
  @get()
  static getJdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdl",
  })
  @post("{id}")
  static createJdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
