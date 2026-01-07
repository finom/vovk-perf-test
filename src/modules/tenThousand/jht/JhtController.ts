import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jht")
export default class JhtController {
  @operation({
    summary: "Get Jht",
  })
  @get()
  static getJht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jht",
  })
  @post("{id}")
  static createJht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
