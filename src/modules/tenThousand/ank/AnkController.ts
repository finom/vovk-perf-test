import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ank")
export default class AnkController {
  @operation({
    summary: "Get Ank",
  })
  @get()
  static getAnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ank",
  })
  @post("{id}")
  static createAnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
