import { procedure, prefix, get, post, operation } from "vovk";

@prefix("en")
export default class EnController {
  @operation({
    summary: "Get En",
  })
  @get()
  static getEn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create En",
  })
  @post("{id}")
  static createEn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
