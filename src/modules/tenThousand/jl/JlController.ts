import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jl")
export default class JlController {
  @operation({
    summary: "Get Jl",
  })
  @get()
  static getJl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jl",
  })
  @post("{id}")
  static createJl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
