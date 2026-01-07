import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiz")
export default class FizController {
  @operation({
    summary: "Get Fiz",
  })
  @get()
  static getFiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiz",
  })
  @post("{id}")
  static createFiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
