import { procedure, prefix, get, post, operation } from "vovk";

@prefix("es")
export default class EsController {
  @operation({
    summary: "Get Es",
  })
  @get()
  static getEs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Es",
  })
  @post("{id}")
  static createEs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
