import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrr")
export default class JrrController {
  @operation({
    summary: "Get Jrr",
  })
  @get()
  static getJrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrr",
  })
  @post("{id}")
  static createJrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
