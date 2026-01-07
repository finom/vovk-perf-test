import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imi")
export default class ImiController {
  @operation({
    summary: "Get Imi",
  })
  @get()
  static getImi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imi",
  })
  @post("{id}")
  static createImi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
