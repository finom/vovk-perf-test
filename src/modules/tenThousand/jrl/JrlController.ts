import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrl")
export default class JrlController {
  @operation({
    summary: "Get Jrl",
  })
  @get()
  static getJrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrl",
  })
  @post("{id}")
  static createJrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
