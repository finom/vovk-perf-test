import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goh")
export default class GohController {
  @operation({
    summary: "Get Goh",
  })
  @get()
  static getGoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goh",
  })
  @post("{id}")
  static createGoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
