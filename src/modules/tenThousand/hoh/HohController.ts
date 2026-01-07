import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoh")
export default class HohController {
  @operation({
    summary: "Get Hoh",
  })
  @get()
  static getHoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoh",
  })
  @post("{id}")
  static createHoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
