import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dao")
export default class DaoController {
  @operation({
    summary: "Get Dao",
  })
  @get()
  static getDao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dao",
  })
  @post("{id}")
  static createDao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
