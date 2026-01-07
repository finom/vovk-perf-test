import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkd")
export default class KkdController {
  @operation({
    summary: "Get Kkd",
  })
  @get()
  static getKkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkd",
  })
  @post("{id}")
  static createKkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
