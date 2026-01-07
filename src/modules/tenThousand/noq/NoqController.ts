import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noq")
export default class NoqController {
  @operation({
    summary: "Get Noq",
  })
  @get()
  static getNoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noq",
  })
  @post("{id}")
  static createNoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
