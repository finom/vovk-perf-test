import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czu")
export default class CzuController {
  @operation({
    summary: "Get Czu",
  })
  @get()
  static getCzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czu",
  })
  @post("{id}")
  static createCzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
