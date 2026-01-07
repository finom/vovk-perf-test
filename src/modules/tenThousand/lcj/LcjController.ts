import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcj")
export default class LcjController {
  @operation({
    summary: "Get Lcj",
  })
  @get()
  static getLcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcj",
  })
  @post("{id}")
  static createLcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
