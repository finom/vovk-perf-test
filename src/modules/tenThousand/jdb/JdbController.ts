import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdb")
export default class JdbController {
  @operation({
    summary: "Get Jdb",
  })
  @get()
  static getJdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdb",
  })
  @post("{id}")
  static createJdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
