import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jho")
export default class JhoController {
  @operation({
    summary: "Get Jho",
  })
  @get()
  static getJho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jho",
  })
  @post("{id}")
  static createJho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
