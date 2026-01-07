import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciz")
export default class CizController {
  @operation({
    summary: "Get Ciz",
  })
  @get()
  static getCiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ciz",
  })
  @post("{id}")
  static createCiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
