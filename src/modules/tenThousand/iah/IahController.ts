import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iah")
export default class IahController {
  @operation({
    summary: "Get Iah",
  })
  @get()
  static getIah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iah",
  })
  @post("{id}")
  static createIah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
