import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqx")
export default class KqxController {
  @operation({
    summary: "Get Kqx",
  })
  @get()
  static getKqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqx",
  })
  @post("{id}")
  static createKqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
