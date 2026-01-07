import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiz")
export default class EizController {
  @operation({
    summary: "Get Eiz",
  })
  @get()
  static getEiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiz",
  })
  @post("{id}")
  static createEiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
