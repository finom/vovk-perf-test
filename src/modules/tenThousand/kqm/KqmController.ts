import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqm")
export default class KqmController {
  @operation({
    summary: "Get Kqm",
  })
  @get()
  static getKqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqm",
  })
  @post("{id}")
  static createKqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
