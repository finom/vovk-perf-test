import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yn")
export default class YnController {
  @operation({
    summary: "Get Yn",
  })
  @get()
  static getYn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yn",
  })
  @post("{id}")
  static createYn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
