import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jns")
export default class JnsController {
  @operation({
    summary: "Get Jns",
  })
  @get()
  static getJns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jns",
  })
  @post("{id}")
  static createJns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
