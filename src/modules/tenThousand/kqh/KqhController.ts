import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqh")
export default class KqhController {
  @operation({
    summary: "Get Kqh",
  })
  @get()
  static getKqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqh",
  })
  @post("{id}")
  static createKqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
