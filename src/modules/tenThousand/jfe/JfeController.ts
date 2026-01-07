import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfe")
export default class JfeController {
  @operation({
    summary: "Get Jfe",
  })
  @get()
  static getJfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfe",
  })
  @post("{id}")
  static createJfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
