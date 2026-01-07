import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqs")
export default class GqsController {
  @operation({
    summary: "Get Gqs",
  })
  @get()
  static getGqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqs",
  })
  @post("{id}")
  static createGqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
