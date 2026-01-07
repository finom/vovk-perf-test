import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jul")
export default class JulController {
  @operation({
    summary: "Get Jul",
  })
  @get()
  static getJul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jul",
  })
  @post("{id}")
  static createJul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
