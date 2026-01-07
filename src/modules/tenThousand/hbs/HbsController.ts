import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbs")
export default class HbsController {
  @operation({
    summary: "Get Hbs",
  })
  @get()
  static getHbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbs",
  })
  @post("{id}")
  static createHbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
