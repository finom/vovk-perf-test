import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hql")
export default class HqlController {
  @operation({
    summary: "Get Hql",
  })
  @get()
  static getHql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hql",
  })
  @post("{id}")
  static createHql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
