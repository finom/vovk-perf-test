import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jak")
export default class JakController {
  @operation({
    summary: "Get Jak",
  })
  @get()
  static getJak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jak",
  })
  @post("{id}")
  static createJak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
