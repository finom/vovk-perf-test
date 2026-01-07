import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boh")
export default class BohController {
  @operation({
    summary: "Get Boh",
  })
  @get()
  static getBoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boh",
  })
  @post("{id}")
  static createBoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
