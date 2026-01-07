import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilu")
export default class IluController {
  @operation({
    summary: "Get Ilu",
  })
  @get()
  static getIlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilu",
  })
  @post("{id}")
  static createIlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
