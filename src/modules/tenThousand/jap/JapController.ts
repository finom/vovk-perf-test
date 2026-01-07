import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jap")
export default class JapController {
  @operation({
    summary: "Get Jap",
  })
  @get()
  static getJap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jap",
  })
  @post("{id}")
  static createJap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
