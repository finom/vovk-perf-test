import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jld")
export default class JldController {
  @operation({
    summary: "Get Jld",
  })
  @get()
  static getJld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jld",
  })
  @post("{id}")
  static createJld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
