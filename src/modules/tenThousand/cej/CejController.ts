import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cej")
export default class CejController {
  @operation({
    summary: "Get Cej",
  })
  @get()
  static getCej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cej",
  })
  @post("{id}")
  static createCej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
