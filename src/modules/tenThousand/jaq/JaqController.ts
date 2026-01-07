import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaq")
export default class JaqController {
  @operation({
    summary: "Get Jaq",
  })
  @get()
  static getJaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaq",
  })
  @post("{id}")
  static createJaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
