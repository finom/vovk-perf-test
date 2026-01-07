import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkl")
export default class JklController {
  @operation({
    summary: "Get Jkl",
  })
  @get()
  static getJkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkl",
  })
  @post("{id}")
  static createJkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
