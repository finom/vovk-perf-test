import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjl")
export default class JjlController {
  @operation({
    summary: "Get Jjl",
  })
  @get()
  static getJjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjl",
  })
  @post("{id}")
  static createJjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
