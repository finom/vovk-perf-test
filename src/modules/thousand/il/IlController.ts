import { procedure, prefix, get, post, operation } from "vovk";

@prefix("il")
export default class IlController {
  @operation({
    summary: "Get Il",
  })
  @get()
  static getIl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Il",
  })
  @post("{id}")
  static createIl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
