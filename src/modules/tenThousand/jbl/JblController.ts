import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbl")
export default class JblController {
  @operation({
    summary: "Get Jbl",
  })
  @get()
  static getJbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbl",
  })
  @post("{id}")
  static createJbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
