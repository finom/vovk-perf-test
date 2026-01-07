import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ana")
export default class AnaController {
  @operation({
    summary: "Get Ana",
  })
  @get()
  static getAna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ana",
  })
  @post("{id}")
  static createAna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
