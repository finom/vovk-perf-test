import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afn")
export default class AfnController {
  @operation({
    summary: "Get Afn",
  })
  @get()
  static getAfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afn",
  })
  @post("{id}")
  static createAfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
