import { procedure, prefix, get, post, operation } from "vovk";

@prefix("les")
export default class LesController {
  @operation({
    summary: "Get Les",
  })
  @get()
  static getLes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Les",
  })
  @post("{id}")
  static createLes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
